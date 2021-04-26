import React from 'react';
import { Layout } from 'antd';
import PublicHeader from './partials/header/Header';
import PublicFooter from './partials/footer/Footer';
import { GameStateProvider } from '../../store/context/gameContext';

const { Content } = Layout;

function PublicLayout({ children }) {
    return (
        <>
            <Layout className="layout" theme="light" >
                <GameStateProvider>
                    <PublicHeader />
                </GameStateProvider>
                <Content style={{ padding: '72px 120px 0px', minHeight: 'calc(100vh - 142px)' }}>
                    <div className="site-layout-content">
                        {children}
                    </div>
                </Content>
                <PublicFooter />
            </Layout>
        </>
    );
}

export default PublicLayout;