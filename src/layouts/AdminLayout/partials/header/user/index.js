import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Logout } from "../../../../../store/middlewares/authMiddleware";
import { GetAuthStateContext } from "../../../../../store/context/authContext";

function UserIcon(props) {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const { dispatch } = GetAuthStateContext();

  const handleMenuClick = (e) => {
    if (e.key === "sign-out") {
      Logout(dispatch, history);
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const userInfo = [
    { id: "2", key: "info", content: "Info" },
    { id: "3", key: "settings", content: "Settings" },
    { id: "4", key: "supports", content: "Supports" },
    { id: "5", key: "sign-out", content: "Log out" },
  ]

  const menuHover = (
    <Menu onClick={handleMenuClick}>
      {userInfo.map((item) => (
        <Menu.Item key={item.key}>{item.content}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown
      overlay={menuHover}
      onVisibleChange={handleVisibleChange}
      visible={visible}
    >
      <UserOutlined className="icon" />
    </Dropdown>
  );
}

export default UserIcon;
