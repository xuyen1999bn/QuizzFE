import { Col, Row, List, Card } from 'antd';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { GetGameStateContext } from '../../../store/context/gameContext';
import { GetSubjectStateContext } from '../../../store/context/subjectContext';
import { getRankedList } from '../../../store/middlewares/gameMiddleware';
import { getSubjectById } from '../../../store/middlewares/subjectMiddleware';

function RankList() {
    const { subjectId } = useParams();
    const history = useHistory();
    const { rankDispatch, rankState } = GetGameStateContext();
    const { subjectSingleState, singleDispatch } = GetSubjectStateContext();
    useEffect(() => {
        getRankedList(rankDispatch, { subjectId }).then(e => {
            if (!e.result)
                history.push('/404');
        });
        getSubjectById(singleDispatch, { subjectId });
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Card
                title={`Ranked ${subjectSingleState.subject?.name}`}
            >
                <List
                    header={
                        <Row>
                            <Col span={6}><strong>Name</strong></Col>
                            <Col span={6}><strong>Email</strong></Col>
                            <Col span={6}><strong>Score</strong></Col>
                            <Col span={6}><strong>Time (seconds)</strong></Col>
                        </Row>
                    }
                    bordered
                    dataSource={rankState.rank || []}
                    renderItem={item => {
                        return (
                            <List.Item>
                                <Row style={{ width: '100%' }}>
                                    <Col span={6}>
                                        {item.player.name}
                                    </Col>
                                    <Col span={6}>
                                        {item.player.email}
                                    </Col>
                                    <Col span={6}>
                                        {item.score}
                                    </Col>
                                    <Col span={6}>
                                        {item.time}
                                    </Col>
                                </Row>
                            </List.Item>
                        );
                    }}
                />
            </Card>
        </>
    );
}

export default RankList;