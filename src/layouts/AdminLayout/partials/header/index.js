import React from "react";
import { Layout, Input } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import { HeaderContainer } from "./header.styles";
import UserIcon from "./user";

function Header(props) {
  const { collapsed, onToggleSidebar } = props;


  return (
    <HeaderContainer>
      <div className="flex">
        <Layout.Header className="site-layout-background">
          <div onClick={onToggleSidebar} className="icon">
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>

          <div>
            <Input.Search
              placeholder="Input something"
              className="input-search"
              onSearch={(e) => {
                // console.log(e);
              }}
            />
            <UserIcon />
          </div>
        </Layout.Header>
      </div>
    </HeaderContainer>
  );
}

export default Header;
