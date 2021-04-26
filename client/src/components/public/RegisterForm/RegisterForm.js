import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router';
import {
    UserOutlined,
    LockOutlined,
    UserAddOutlined,
    CaretLeftOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { Register } from '../../../store/middlewares/authMiddleware';
import { GetAuthStateContext } from '../../../store/context/authContext';

function RegisterForm() {
    const history = useHistory();
    const { authState, dispatch } = GetAuthStateContext();
    const [formInstance] = Form.useForm();

    const onFinish = values => {
        debugger;
        Register(dispatch, values, (result) => {
            if (result) {
                formInstance.resetFields();
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
                form={formInstance}
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
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
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
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Please input your password min length 6 character!' }
                    ]}
                    hasFeedback
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="rePassword"
                    rules={[
                        { required: true, message: 'Please input your re-password!' },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                    hasFeedback
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
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
                        icon={<UserAddOutlined />}
                    >
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default RegisterForm;