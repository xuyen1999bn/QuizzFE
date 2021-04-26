import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { GetAuthStateContext } from "../../../../../store/context/authContext";
import { Logout } from "../../../../../store/middlewares/authMiddleware";
import { useHistory } from "react-router";
import {
    UserAddOutlined,
    LoginOutlined,
} from "@ant-design/icons";

function UserIcon() {
    const [visible, setVisible] = useState(false);
    const { dispatch, authState } = GetAuthStateContext();
    const history = useHistory();
    const handleMenuClick = (e) => {
        if (e.key === "sign-out") {
            Logout(dispatch, history);
        }
    };

    const handleVisibleChange = (flag) => {
        setVisible(flag);
    };

    const menuHover = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key={1}>Profile</Menu.Item>
            <Menu.Item key='sign-out'>Logout</Menu.Item>
        </Menu>
    );

    if (localStorage.getItem('token_access') && !authState.accessToken) {
        window.location.reload();
    }
    return (
        <>
            {
                (localStorage.getItem('token_access') && authState.accessToken) ?
                    <Dropdown
                        overlay={menuHover}
                        onVisibleChange={handleVisibleChange}
                        visible={visible}
                    >
                        <Button
                            icon={
                                <UserOutlined className="icon" />
                            }
                            shape='round'
                            type='text'
                        >
                            &nbsp;<b>Xin chào, {authState.auth?.name}</b>
                        </Button>
                    </Dropdown>
                    :
                    <>
                        <Button
                            type="default"
                            shape='round'
                            icon={<LoginOutlined />}
                            onClick={() => history.push('/auth/login')}
                        >
                            Sign In
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            shape='round'
                            type="primary"
                            icon={<UserAddOutlined />}
                            onClick={() => history.push('/auth/register')}
                        >
                            Sign Up
                        </Button>
                    </>
            }
        </>
    );
}

export default UserIcon;
