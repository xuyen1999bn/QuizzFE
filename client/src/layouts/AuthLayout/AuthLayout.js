import { Col, Row, Tabs } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { StyledLogin } from '../../utilities/styledComponent/components/AuthLayout';
import { WrapContent, Logo } from '../../utilities/styledComponent/_shared';

function AuthLayout(props) {
    const history = useHistory();
    const [keyTabActive, setKeyTabActive] = useState(history.location.pathname);
    return (
        <>
            <StyledLogin>
                <Row
                    justify='space-around'
                    align='middle'
                    style={{
                        minHeight: '100vh',
                        marginTop: '-40px'
                    }}
                >
                    <Col md={14} sm={20} xs={24} lg={12} xl={9}>
                        <WrapContent
                            minHeight='100px'
                            padding='10px 72px'
                            backgroundColor='white'
                            borderRadius='6px'
                            maxWidth='550px'
                            margin='auto'
                        >
                            <Logo
                                width='140px'
                                height='100px'
                                margin='auto'
                            />
                            <Tabs
                                defaultActiveKey={keyTabActive}
                                activeKey={keyTabActive}
                                onChange={(key) => { setKeyTabActive(key); history.push(key) }}
                            >
                                <Tabs.TabPane tab="Sign in" key="/auth/login" />
                                <Tabs.TabPane tab="Sign up" key="/auth/register" />
                            </Tabs>
                            {props.children}
                        </WrapContent>
                    </Col>
                </Row>
            </StyledLogin>
        </>
    );
}

export default AuthLayout;