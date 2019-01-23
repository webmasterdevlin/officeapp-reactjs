import { Endpoints } from "../helpers/constants";

import http from "./http.service";
import { getJwt } from "./auth.service";
import {
  authBearerAndContentTypeJsonHeaders,
  authBearerHeaders
} from "../helpers/httpHeaders";
http.setJwt(getJwt());

export async function loadDepartments() {
  return await http.get(Endpoints.departmentUrl, authBearerHeaders);
}

export async function addDepartment(department) {
  return await http.post(
    Endpoints.departmentUrl,
    JSON.stringify(department),
    authBearerAndContentTypeJsonHeaders
  );
}

export async function getDepartment(id) {
  return await http.get(`${Endpoints.departmentUrl}${id}`, authBearerHeaders);
}

export async function putDepartment(department) {
  return await http.put(
    `${Endpoints.departmentUrl}${department.id}`,
    department,
    authBearerAndContentTypeJsonHeaders
  );
}

export async function deleteDepartment(id) {
  return await http.delete(
    `${Endpoints.departmentUrl}${id}`,
    authBearerHeaders
  );
}
