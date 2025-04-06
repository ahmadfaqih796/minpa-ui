import BaseApi from "../../../api/httpClient";

class AuthService {
  async login(data) {
    return await BaseApi().post("/authentication", data);
  }
}

export default AuthService;
