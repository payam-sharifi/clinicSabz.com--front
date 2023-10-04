import http from "./httpServer";

http.setjwt(getjwt());

export function register(user) {
  return http.post("/userregister", {
    userName: user.userName,
    email: user.email,
    password: user.pasData,
    phone: user.phone,
  });
}

export function login(userName, password) {
  return http.post("/authUser", { userName, password });
}

export function getjwt() {
  return localStorage.getItem("token");
}

const userService = {
  register,
  login,
  getjwt,
};

export default userService;
