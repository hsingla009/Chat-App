import Api from "./api";
const AuthService = {
  login: (data) => {
    return Api.post("login", data)
      .then(({ data }) => {
        Api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        return data;
      })
      .catch((err) => {
        console.log("AuthService error", err);
        throw err;
      });
  },
  register: (data) => {
    return Api.post("register", data)
      .then(({ data }) => {
        Api.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        return data;
      })
      .catch((err) => {
        console.log("AuthService error", err);
        throw err;
      });
  },
  logout: () => {},
};

export default AuthService;
