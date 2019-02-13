import { getJwt } from "../services/auth.service";
const token = getJwt();

export const authBearerHeaders = {
  headers: {
    Authorization: "Bearer " + token
  }
};

export const authBearerAndContentTypeJsonHeaders = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "Bearer " + token
  }
};
