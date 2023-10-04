import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

const register = (username, email, password) => {
  return axios.post("/user" , {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post("authUser" , {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};

export default authService;