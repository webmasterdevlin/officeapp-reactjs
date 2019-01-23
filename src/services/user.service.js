import http from "./http.service";
import { Endpoints } from "../helpers/constants";
import { getJwt } from "./auth.service";
http.setJwt(getJwt());

export async function signin(loginModel) {
  return await http.post(Endpoints.loginUrl, loginModel);
}

export async function signup(user) {
  return await http.post(Endpoints.registerUrl, user);
}
