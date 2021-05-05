import React from 'react';
import { CardStyled } from '../../../utilities/styledComponent/components/CardStyled';
import { WrapContent } from '../../../utilities/styledComponent/_shared';
import ImageSkeleton from '../../../assets/skeleton_image.gif';
import { Col } from 'antd';
import {
    CaretRightStyled,
    EllipsisStyled,
    OrderedListStyled,
} from '../../../utilities/styledComponent/components/IconStyled';
import Meta from 'antd/lib/card/Meta';

function SubjectSkeleton({ loading }) {
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

    return (
        <>
            <>
                <Col
                    md={spanFirst.md}
                    sm={spanFirst.sm}
                    lg={spanFirst.lg}
                    xl={spanFirst.xl}
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
                                    src={ImageSkeleton}
                                    width='100%'
                                    height='180'
                                />
                            }
                            actions={[
                                <CaretRightStyled key='like' />,
                                <OrderedListStyled key="edit" />,
                                <EllipsisStyled key="ellipsis" />,
                            ]}
                            loading={loading}
                        >
                            <Meta
                                title='title'
                                description="This is the description"
                            />
                        </CardStyled>
                    </WrapContent>
                </Col>
                <Col
                    md={span.md}
                    sm={span.sm}
                    lg={span.lg}
                    xl={span.xl}

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
                                    src={ImageSkeleton}
                                    width='100%'
                                    height='180'
                                />
                            }
                            actions={[
                                <CaretRightStyled key='like' />,
                                <OrderedListStyled key="edit" />,
                                <EllipsisStyled key="ellipsis" />,
                            ]}
                            loading={loading}
                        >
                            <Meta
                                title='title'
                                description="This is the description"
                            />
                        </CardStyled>
                    </WrapContent>
                </Col>
                <Col
                    md={span.md}
                    sm={span.sm}
                    lg={span.lg}
                    xl={span.xl}

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
                                    src={ImageSkeleton}
                                    width='100%'
                                    height='180'
                                />
                            }
                            actions={[
                                <CaretRightStyled key='like' />,
                                <OrderedListStyled key="edit" />,
                                <EllipsisStyled key="ellipsis" />,
                            ]}
                            loading={loading}
                        >
                            <Meta
                                title='title'
                                description="This is the description"
                            />
                        </CardStyled>
                    </WrapContent>
                </Col>
                <Col
                    md={span.md}
                    sm={span.sm}
                    lg={span.lg}
                    xl={span.xl}

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
                                    src={ImageSkeleton}
                                    width='100%'
                                    height='180'
                                />
                            }
                            actions={[
                                <CaretRightStyled key='like' />,
                                <OrderedListStyled key="edit" />,
                                <EllipsisStyled key="ellipsis" />,
                            ]}
                            loading={loading}
                        >
                            <Meta
                                title='title'
                                description="This is the description"
                            />
                        </CardStyled>
                    </WrapContent>
                </Col>
                <Col
                    md={span.md}
                    sm={span.sm}
                    lg={span.lg}
                    xl={span.xl}

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
                                    src={ImageSkeleton}
                                    width='100%'
                                    height='180'
                                />
                            }
                            actions={[
                                <CaretRightStyled key='like' />,
                                <OrderedListStyled key="edit" />,
                                <EllipsisStyled key="ellipsis" />,
                            ]}
                            loading={loading}
                        >
                            <Meta
                                title='title'
                                description="This is the description"
                            />
                        </CardStyled>
                    </WrapContent>
                </Col>
            </>
        </>
    );
}

export default SubjectSkeleton;