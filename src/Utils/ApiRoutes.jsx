const ApiRoutes = {
  SIGN_IN: {
    path: "/user/login",
    authentication: false,
  },
  CREATE_EMPLOYEE: {
    path: "/user/create_employee",
    authentication: true,
  },
  GET_USER: {
    path: "/user",
    authentication: true,
  }
 
};

export default ApiRoutes
