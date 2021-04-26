import { Button, Col, Row, List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect } from 'react';
import { ModalRankedItemStyled, ModalRankedStyled } from '../../utilities/styledComponent/components/RankModal';
import { CardModalStart, ModalStartStyled } from '../../utilities/styledComponent/components/ModalStart';
import { WrapContent } from '../../utilities/styledComponent/_shared';
import { GetGameStateContext } from '../../store/context/gameContext';
import { getRankedList } from '../../store/middlewares/gameMiddleware';

function ModalStart({ modal, handleOk, handleCancel }) {
    const { isVisible, subject } = modal;
    const { rankDispatch, rankState } = GetGameStateContext();
    useEffect(() => {
        if (subject)
            getRankedList(rankDispatch, { subjectId: subject._id });
        // eslint-disable-next-line
    }, [subject]);
    return (
        <>
            <ModalStartStyled
                visible={isVisible}
                title="&nbsp;"
                centered
                onCancel={handleCancel}
                footer={<></>}
                width='100%'
            >
                <Row gutter={[16, 0]}>
                    <Col xs={24} md={12} style={{ borderRight: '1px solid #fff' }}>
                        <WrapContent
                            height='100%'
                            width='100%'
                            backgroundImage={`url(${subject?.image || ''})`}
                            backgroundSize='cover'
                            opacity='60%'
                            position='absolute'
                            top='0'
                            left='0'
                        >
                        </WrapContent>
                        <CardModalStart
                            title={subject?.name}
                        >
                            <p>Level: {subject?.level}</p>
                            <p>Description: {subject?.description}</p>
                        </CardModalStart>
                        <WrapContent>
                            <Button
                                className='ant-btn-play'
                                key="submit"
                                type="primary"
                                onClick={() => handleOk(subject)}
                            >
                                Start Game
                            </Button>
                        </WrapContent>
                    </Col>
                    <Col xs={24} md={12}>
                        <CardModalStart
                            title='Score Ranked'
                        >
                            <WrapContent
                                height='calc(100vh - 239px)'
                                overflowY='auto'
                            >
                                <ModalRankedStyled
                                    itemLayout="horizontal"
                                    dataSource={rankState?.rank || []}
                                    renderItem={item => {
                                        return (
                                            <ModalRankedItemStyled>
                                                <List.Item.Meta
                                                    avatar={<Avatar src={item.player.image} />}
                                                    title={<div style={{ color: 'white' }}>{item.player.name}</div>}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}
                                                    description={
                                                        <Row>
                                                            <Col md={12} sm={24}>
                                                                <WrapContent>
                                                                    Score: {item.score}
                                                                </WrapContent>
                                                            </Col>
                                                            <Col md={12} sm={24}>
                                                                <WrapContent
                                                                    display='flex'
                                                                    justifyContent='flex-end'
                                                                    margin="0 15px 0"
                                                                >
                                                                    Time: {item.time}
                                                                </WrapContent>
                                                            </Col>
                                                        </Row>
                                                    }
                                                />
                                            </ModalRankedItemStyled>
                                        )
                                    }}
                                />
                            </WrapContent>
                        </CardModalStart>
                    </Col>
                </Row>
            </ModalStartStyled>
        </>
    );
}

export default ModalStart;