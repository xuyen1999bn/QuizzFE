import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

function PlayingLayout({ children }) {
    return (
        <>
            <Content style={{ minHeight: '100vh' }}>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
        </>
    );
}

export default PlayingLayout;