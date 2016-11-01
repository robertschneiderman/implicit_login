export const login = user => ({
  type: "LOGIN",
  user
});

export const logout = () => ({
  type: "LOGOUT",
});

export const receiveCurrentUser = currentUser => ({
  type: "RECEIVE_CURRENT_USER",
  currentUser
});

export const receiveErrors = errors => ({
  type: "RECEIVE_ERRORS",
  errors
});