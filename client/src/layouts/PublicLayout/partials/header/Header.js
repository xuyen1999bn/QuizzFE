import React, { useEffect, useState } from "react";
import { WrapContent, Logo } from "../../../../utilities/styledComponent/_shared";
import { HeaderStyled, SearchPublic } from '../../../../utilities/styledComponent/components/PublicLayout';
import { Col, Menu, message, Modal, Row } from "antd";
import UserIcon from './user/User';
import { useHistory } from "react-router";
import { axiosInstance } from "../../../../configs/axiosInstance";
import ModalPlay from "../../../../components/shared/ModalPlay";
import ModalStart from "../../../../components/shared/ModalStart";
import { GetAuthStateContext } from "../../../../store/context/authContext";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { createGame } from "../../../../store/middlewares/gameMiddleware";
import { GetGameStateContext } from "../../../../store/context/gameContext";

function PublicHeader() {
    const { authState } = GetAuthStateContext();
    const { createDispatch } = GetGameStateContext();
    const [firstSearch, setFirstSearch] = useState(false);
    const [subjectSearchResult, setSubjectSearchResult] = useState({
        active: false,
        result: [],
        search: []
    });
    const history = useHistory();
    const onSearch = (e) => {
        if (!firstSearch) setFirstSearch(true);
        const search = subjectSearchResult.result.filter((subject) => {
            return subject.name.toLowerCase().includes(e.target.value?.toLowerCase())
        });
        setSubjectSearchResult({
            ...subjectSearchResult,
            active: true,
            search: search,
        });
    };
    const [modalPlay, setModalPlay] = useState({
        isVisible: false,
        subject: null,
    });
    const [modalStart, setModalStart] = useState({
        isVisible: false,
        subject: null,
    });
    const openModalPlay = (subject) => {
        setModalPlay({
            ...modalPlay,
            isVisible: true,
            subject: subject
        });
    }
    const closeModalPlay = () => {
        setModalPlay({
            ...modalPlay,
            isVisible: false,
            subject: null,
        });
    }
    const openModalStart = (subject) => {
        setModalStart({
            ...modalStart,
            isVisible: true,
            subject: subject
        });
    }
    const closeModalStart = () => {
        setModalStart({
            ...modalStart,
            isVisible: false,
            subject: null,
        });
    }
    const handleOk = (subject) => {
        if (authState.accessToken && localStorage.getItem('token_access')) {
            openModalStart(subject);
            closeModalPlay();
        } else {
            Modal.confirm({
                title: 'You need login to play game',
                icon: <ExclamationCircleOutlined />,
                okText: 'Go to login',
                cancelText: 'Late',
                onOk() {
                    history.push('/auth/login');
                },
                onCancel() {
                    // console.log('Cancel');
                },
            })
        }
    }
    const handleOkModalStart = (subject) => {
        closeModalStart();
        createGame(createDispatch, subject).then((res) => {
            if (res.result) {
                history.push('/home/playing/' + res.game._id);
            } else {
                message.error("Create game failed, please try again");
            }
        })
    }
    const renderSubject = () => {
        if (subjectSearchResult.search?.length > 0) {
            return subjectSearchResult.search.map((subject) => {
                return (
                    <Col
                        span={24}
                        key={subject._id}
                        onClick={() => {
                            openModalPlay(subject);
                        }}
                    >
                        <Row className="subject-item">
                            <Col md={6} sm={24}>
                                <div className="container-img">
                                    <img height="40" width="40" src={subject.image} alt="" />
                                </div>
                            </Col>
                            <Col md={18} sm={24}>
                                {subject.name}
                            </Col>
                        </Row>
                    </Col>
                )
            })
        } else if (firstSearch) {
            return (
                <>
                    <Col span={24}>
                        <p style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '0' }}>
                            Not Found Any Subject
                        </p>
                    </Col>
                </>
            );
        }
    }
    const onSelect = ({ item, key }) => {
        history.push('/home/' + key);
    }
    useEffect(() => {
        axiosInstance.get("/subject").then((res) => {
            if (res && res.status >= 200 && res.status <= 300) {
                setSubjectSearchResult({
                    active: false,
                    search: [],
                    result: res.data.subjects
                });
            }
        });
    }, []);

    return (
        <>
            <HeaderStyled>
                <Row>
                    <Col lg={3} md={3} sm={6} xs={24}>
                        <Logo height='40px' width='150px' float='left' />
                    </Col>
                    <Col lg={5} md={3} sm={12} xs={24}>
                        <WrapContent
                            display='flex'
                            alignItems='center'
                            height='100%'
                        >
                            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['join']}
                                onSelect={onSelect}
                            >
                                <Menu.Item key="join">Home</Menu.Item>
                                <Menu.Item key="sendQuestions">Send Question</Menu.Item>
                            </Menu>
                        </WrapContent>
                    </Col>
                    <Col lg={12} md={14} sm={12} xs={24}>
                        <WrapContent
                            display='flex'
                            alignItems='center'
                            height='100%'
                        >
                            <div className="container-search">
                                <SearchPublic
                                    placeholder="Search Topics"
                                    onChange={onSearch}
                                    onBlur={() => {
                                        window.setTimeout(() => {
                                            setSubjectSearchResult({
                                                ...subjectSearchResult,
                                                active: false,
                                            })
                                        }, 200);
                                    }}
                                    onFocus={() => setSubjectSearchResult({
                                        ...subjectSearchResult,
                                        active: true,
                                    })}
                                    enterButton
                                />
                                {
                                    subjectSearchResult.active &&
                                    <div className="container-subject-list">
                                        <Row>
                                            {renderSubject()}
                                        </Row>
                                    </div>
                                }
                            </div>
                        </WrapContent>
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={24}>
                        <WrapContent
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            height='100%'
                        >
                            <UserIcon />
                        </WrapContent>
                    </Col>
                </Row>
            </HeaderStyled>
            <ModalPlay
                modal={modalPlay}
                handleOk={handleOk}
                handleCancel={closeModalPlay}
            />
            <ModalStart
                modal={modalStart}
                handleCancel={closeModalStart}
                handleOk={handleOkModalStart}
            />
        </>
    );
}

export default PublicHeader;
