import Api from "./api";
const AuthService = {
  login: (data) => {
    return Api.post("login", data)
      .then(({ data }) => {
        // console.log(data);
        setHeaderAndStorage(data);
        return data;
      })
      .catch((err) => {
        // console.log("AuthService error", err.response.data.message);
        throw err;
      });
  },
  register: (data) => {
    return Api.post("register", data)
      .then(({ data }) => {
        setHeaderAndStorage(data);
        return data;
      })
      .catch((err) => {
        // console.log("AuthService error", err.response.data.message);
        throw err;
      });
  },
  logout: () => {
    Api.defaults.headers["Authorization"] = "";
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
};

const setHeaderAndStorage = (user) => {
  Api.defaults.headers["Authorization"] = `Bearer ${user.token}`;
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", user.token);
};

export default AuthService;
