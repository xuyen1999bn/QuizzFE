import { message } from "antd";

import {
    authFailed,
    authPending,
    authSuccess,
    loginPending,
    loginSuccess,
    loginFailed,
    registerAccountPending,
    registerAccountSuccess,
    registerAccountFailed,
    logout,
} from "../actions/authAction/authAction";
import {
    authEffect,
    loginEffect,
    registerEffect,
} from "../effects/authEffect";

const messKeyLogin = "messKeyLogin";
const messKeyRegister = "messKeyRegister";

export const Auth = async (dispatch) => {
    dispatch(authPending());
    const res = await authEffect();

    if (res && res.status >= 200 && res.status <= 300) {
        const data = res?.data?.user;
        dispatch(authSuccess(data));
    } else {
        dispatch(authFailed(res?.data?.message || 'wrong'));
    }
};

export const Login = async (dispatch, data) => {
    message.loading({
        content: "Login ...",
        key: messKeyLogin,
    });
    dispatch(loginPending());
    const res = await loginEffect(data);
    const notification = res?.data?.message;

    if (res && res.status >= 200 && res.status <= 300) {
        const token = res.data.token;
        localStorage.setItem('token_access', token);
        message.success({
            content: notification || "Login successful",
            key: messKeyLogin,
            duration: 2,
        });
        dispatch(loginSuccess(token));
        return true;
    } else {
        message.error({
            content: notification || "Something went wrong",
            key: messKeyLogin,
            duration: 2,
        });
        dispatch(loginFailed(notification || "Something went wrong"));
        return false;
    }
};


export const Register = async (dispatch, data, callback) => {
    message.loading({
        content: "Registering ...",
        key: messKeyRegister,
    });
    dispatch(registerAccountPending());
    const res = await registerEffect(data);
    const notification = res?.data?.message;

    if (res && res.status >= 200 && res.status <= 300) {
        message.success({
            content: notification || "Register successful",
            key: messKeyRegister,
            duration: 2,
        });
        dispatch(registerAccountSuccess());
        callback(true);
    } else {
        message.error({
            content: notification || "Something went wrong",
            key: messKeyRegister,
            duration: 2,
        });
        dispatch(registerAccountFailed(notification || "Something went wrong"));
        callback(false);
    }
};

export const Logout = (dispatch, history) => {
    dispatch(logout());
    message.success({
        content: "Logout successful",
        duration: 2,
    });
    history.push('/auth/login');
}

