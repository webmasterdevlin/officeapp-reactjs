import http from "./http.service";
import { BaseUrl } from "../helpers/constants";
import { getJwt } from "./auth.service";
http.setJwt(getJwt());

export async function postLogin(loginModel) {
  return await http.post(BaseUrl.login, loginModel);
}

export async function postRegister(user) {
  return await http.post(BaseUrl.register, user);
}
