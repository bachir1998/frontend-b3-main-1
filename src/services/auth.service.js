import axios from "axios";
class AuthService {
  login(username, password) {
    return axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: username,
        password: password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password) {
    return axios.post("http://localhost:1337/api/auth/local/register", {
        username: username,
        email: email,
        password: password
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();
