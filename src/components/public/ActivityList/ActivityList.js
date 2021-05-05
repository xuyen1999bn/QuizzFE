import { Alert, Col, Modal, Row } from 'antd';
import React from 'react';
import { CardStyled } from '../../../utilities/styledComponent/components/CardStyled';
import { CaretRightStyled, OrderedListStyled } from '../../../utilities/styledComponent/components/IconStyled';
import { WrapContent } from '../../../utilities/styledComponent/_shared';
import SubjectSkeleton from '../SubjectList/SubjectSkeleton';
import Meta from 'antd/lib/card/Meta';
import { useHistory } from 'react-router';

function ActivityList({ activities, title, loading, errorMsg }) {
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
    const renderSubject = activities => {
        if (activities.length > 0) {
            return activities.filter(activity => !activity.game.isFinished).map((activity, index) => {
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
                                hoverable
                                maxwidth='270px'
                                headStyle={{
                                    borderTopLeftRadius: '15px',
                                    borderTopRightRadius: '15px'
                                }}
                                cover={
                                    <img
                                        alt="example"
                                        src={activity.subjectDetail?.image}
                                        width='100%'
                                        height='180'
                                    />
                                }
                                actions={[
                                    <CaretRightStyled key='like'
                                        onClick={() => {
                                            Modal.confirm({
                                                content: "Do you want continue play game ??",
                                                onOk: () => {
                                                    history.push('/home/playing/' + activity.game?._id);
                                                }
                                            })
                                        }}
                                    />
                                    ,
                                    <OrderedListStyled key="edit"
                                        onClick={() => {
                                            history.push(`/home/ranked/${activity.subjectDetail._id}`);
                                        }}
                                    />
                                ]}
                            >
                                <Meta
                                    title={activity.subjectDetail?.name}
                                    description="This is the description"
                                />
                            </CardStyled>
                        </WrapContent>
                    </Col>
                );
            });
        } else {
            return <Alert
                message="Info"
                description="Not Found Any Activity"
                type="info"
                showIcon
                style={{ width: '100%' }}
            />
        }
    };
    return (
        <>
            <CardStyled
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
                    {!errorMsg && renderSubject(activities)}
                    {
                        loading ?
                            <SubjectSkeleton loading={loading} />
                            :
                            ''
                    }
                </Row>
            </CardStyled>
        </>
    );
}

export default ActivityList;