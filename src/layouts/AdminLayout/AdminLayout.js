import React, { useState } from 'react';
import { WrapContent } from '../../utilities/styledComponent/_shared';
import Sidebar from './partials/sidebar';
import Header from './partials/header';
import { Layout } from 'antd';

function AdminLayout({ children }) {
    // console.log('admin layout render');
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <>
            <Layout className="layout">
                <Sidebar collapsed={collapsed} />
                <Layout className="site-layout">
                    <Header onToggleSidebar={toggle} collapsed={collapsed} />
                    <Layout.Content className="layout-content site-layout-background">
                        <WrapContent position="relative" height="100%">
                            {children}
                        </WrapContent>
                    </Layout.Content>
                </Layout>
            </Layout>
        </>
    );
}

export default AdminLayout;