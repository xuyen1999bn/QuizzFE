import React from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { SidebarContainer } from "./sidebar.styles";
import { capitalizing } from "../../../../utilities/helpers/notification";
import {
  UserOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import ImageQizz from '../../../../assets/logo.png';

function Sidebar(props) {
  const { collapsed } = props;
  const history = useHistory();

  const onClickDashboard = (e) => {
    history.push("/" + e.key);
  };

  const categories = [
    {
      id: "1",
      key: "subject",
      icon: <UserOutlined />,
      items: [{ key: "list" }, { key: "create" }],
    },
    {
      id: "2",
      key: "question",
      icon: <FileProtectOutlined />,
      items: [{ key: "list" }, { key: "create" }, { key: "pending" }],
    },
  ];


  const renderSidebar = () => {
    return categories.map((cate) => {
      const { key, icon, items } = cate;
      const menuItem = items.map((item) => (
        <Menu.Item key={`${key}/${item.key}`}>
          {capitalizing(item.key)}
        </Menu.Item>
      ));
      return (
        <Menu.SubMenu key={key} icon={icon} title={capitalizing(key)}>
          {menuItem}
        </Menu.SubMenu>
      );
    });
  };

  return (
    <SidebarContainer>
      <Layout.Sider className="sider" collapsed={collapsed}>
        <div className="logo">
          <img height='65px' width='40px' alt="logo" src={ImageQizz} style={{ width: '70%' }} />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={onClickDashboard}
        >
          {renderSidebar()}
        </Menu>
      </Layout.Sider>
    </SidebarContainer>
  );
}

export default Sidebar;
