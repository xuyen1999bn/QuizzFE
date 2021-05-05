import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router';
import {
    UserOutlined,
    LockOutlined,
    CaretLeftOutlined,
    LoginOutlined,
} from "@ant-design/icons";
import { Login } from '../../../store/middlewares/authMiddleware';
import { GetAuthStateContext } from '../../../store/context/authContext';

function LoginForm() {
    const history = useHistory();
    const { authState, dispatch } = GetAuthStateContext();

    const onFinish = values => {
        Login(dispatch, values).then((res) => {
            if (res) {
                window.location.href = '/';
            }
        });
    };
    const layout = {
        wrapperCol: { span: 24 },
    };
    const tailLayout = {
        wrapperCol: { offset: 6, span: 16 },
    };
    return (
        <>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}
                    hasFeedback
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button
                        type="default"
                        onClick={() => history.push('/')}
                        icon={<CaretLeftOutlined />}
                    >
                        Back Home
                    </Button>
                        &nbsp;
                        <Button
                        type="primary"
                        htmlType="submit"
                        loading={authState.pending}
                        icon={<LoginOutlined />}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default LoginForm;