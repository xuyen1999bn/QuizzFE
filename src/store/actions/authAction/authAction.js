import {
  AuthFailed,
  AuthPending,
  AuthSuccess,
  LoginPending,
  LoginSuccess,
  LoginFailed,
  LogoutPending,
  LogoutSuccess,
  LogoutFailed,
  RegisterAccountFailed,
  RegisterAccountPending,
  RegisterAccountSuccess,
  Logout,
} from "./authActionType";

// Login
export function loginPending() {
  return {
    type: LoginPending,
  };
}

export function loginFailed(error) {
  return {
    type: LoginFailed,
    payload: error,
  };
}

export function loginSuccess(token) {
  return {
    type: LoginSuccess,
    payload: token,
  };
}

// Logout
export function logoutPending() {
  return {
    type: LogoutPending,
  };
}

export function logoutSuccess(user) {
  return {
    type: LogoutSuccess,
    payload: user,
  };
}

export function logoutFailed(error) {
  return {
    type: LogoutFailed,
    payload: error,
  };
}

// Authentication
export function authPending() {
  return {
    type: AuthPending,
  };
}

export function authFailed() {
  return {
    type: AuthFailed,
  };
}

export function authSuccess(user) {
  return {
    type: AuthSuccess,
    payload: user,
  };
}

//register account
export function registerAccountPending() {
  return {
    type: RegisterAccountPending,
  };
}

export function registerAccountSuccess() {
  return {
    type: RegisterAccountSuccess,
  };
}

export function registerAccountFailed(error) {
  return {
    type: RegisterAccountFailed,
    payload: error,
  };
}

//logout
export function logout() {
  return {
    type: Logout
  }
}