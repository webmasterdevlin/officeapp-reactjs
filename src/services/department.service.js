import { BaseUrl } from "../helpers/constants";

import http from "./http.service";
import { getJwt } from "./auth.service";
import {
  authBearerAndContentTypeJsonHeaders,
  authBearerHeaders
} from "../helpers/httpHeaders";
http.setJwt(getJwt());

export async function getDepartments() {
  return await http.get(BaseUrl.department, authBearerHeaders);
}

export async function getDepartment(id) {
  return await http.get(`${BaseUrl.department}${id}`, authBearerHeaders);
}

export async function postDepartment(department) {
  return await http.post(
    BaseUrl.department,
    JSON.stringify(department),
    authBearerAndContentTypeJsonHeaders
  );
}

export async function putDepartment(department) {
  return await http.put(
    `${BaseUrl.department}${department.id}`,
    department,
    authBearerAndContentTypeJsonHeaders
  );
}

export async function deleteDepartment(id) {
  return await http.delete(`${BaseUrl.department}${id}`, authBearerHeaders);
}
