import createApiClient from "./AxiosInstance";

// Create an Axios instance
const client = createApiClient();

export const api = {
  //LOGIN
  login: (payload) =>
    client.post("/auth/login", payload).then(({ data }) => data),
  logout: () => client.post("/auth/logout").then(({ data }) => data),

}