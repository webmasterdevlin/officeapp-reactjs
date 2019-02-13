import { postLogin } from "./user.service";
import jwtDecode from "jwt-decode";

const key = "token";

export async function login(user) {
  const { data: jwt } = await postLogin(user);
  localStorage.setItem("token", jwt.token);
}

export function logOut() {
  localStorage.removeItem("token");
  window.location = "/login";
}

export function getJwt() {
  return localStorage.getItem(key);
}

export function routeCanActivate() {
  const token = localStorage.getItem(key);
  if (!token) return false;

  const decoded = jwtDecode(token);
  const expiresAt = decoded.exp * 1000;
  const dateNow = Date.now();
  return dateNow <= expiresAt;
}

export default {
  login,
  logOut,
  routeCanActivate
};
