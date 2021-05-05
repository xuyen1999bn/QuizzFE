import React, { useState } from 'react';
import {
    Row,
    Col,
    Alert,
    Modal,
    message
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { WrapContent } from '../../../utilities/styledComponent/_shared';
import { CardStyled } from '../../../utilities/styledComponent/components/CardStyled';
import {
    CaretRightStyled,
    OrderedListStyled,
} from '../../../utilities/styledComponent/components/IconStyled';
import Meta from 'antd/lib/card/Meta';
import { useHistory } from 'react-router-dom';
import SubjectSkeleton from './SubjectSkeleton';
import ModalPlay from '../../shared/ModalPlay';
import { GetAuthStateContext } from '../../../store/context/authContext';
import ModalStart from '../../shared/ModalStart';
import { GetGameStateContext } from '../../../store/context/gameContext';
import { createGame } from '../../../store/middlewares/gameMiddleware';

function SubjectList({ subjects, title, loading, errorMsg }) {
    const { authState } = GetAuthStateContext();
    const { gameCreateState, createDispatch } = GetGameStateContext();
    const history = useHistory();
    const span = {
        md: 12,
        sm: {
            span: 24, offset: 0
        },
        lg: 8,
        xl: { span: 4, offset: 1 },
        offset: 1,
    };
    const spanFirst = {
        md: 12,
        sm: 24,
        lg: 8,
        xl: 4,
        offset: 1,
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
    const renderSubject = subjects => {
        return subjects.map((subject, index) => {
            const _span = index % 5 === 0 ? spanFirst : span;
            return (
                <Col
                    key={index}
                    md={_span.md}
                    sm={_span.sm}
                    lg={_span.lg}
                    xl={_span.xl}
                    className="subject-list-item"
                >
                    <WrapContent
                        display="flex"
                        justifyContent='center'
                        width='100%'
                    >
                        <CardStyled
                            onClick={() => {
                                openModalPlay(subject);
                            }}
                            hoverable
                            maxwidth='270px'
                            headStyle={{
                                borderTopLeftRadius: '15px',
                                borderTopRightRadius: '15px'
                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={subject.image}
                                    width='100%'
                                    height='180'
                                />
                            }
                            actions={[
                                <CaretRightStyled key='like'
                                    onClick={() => {
                                        openModalPlay(subject);
                                    }}
                                />
                                ,
                                <OrderedListStyled key="edit"
                                    onClick={() => {
                                        history.push(`/home/ranked/${subject._id}`);
                                    }}
                                />
                            ]}
                        >
                            <Meta
                                title={subject.name}
                                description="This is the description"
                            />
                        </CardStyled>
                    </WrapContent>
                </Col>
            );
        });
    };
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

    return (
        <>
            <CardStyled
                loading={gameCreateState.pending}
                title={title || "Subject Challenger"}
                headStyle={{
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    backgroundColor: 'cadetblue',
                    color: 'white'
                }}
            >
                {errorMsg !== '' ? <Alert
                    message="Error"
                    description={errorMsg}
                    type="error"
                    showIcon
                /> : ''}
                <Row>
                    {renderSubject(subjects)}
                    {
                        loading ?
                            <SubjectSkeleton loading={loading} />
                            :
                            ''
                    }
                </Row>
            </CardStyled>
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

export default SubjectList;