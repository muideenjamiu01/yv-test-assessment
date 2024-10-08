import createApiClient from "./AxiosInstance";

// Create an Axios instance
const client = createApiClient();

export const api = {
  //LOGIN
  getInvoices: () =>
    client.get("http://localhost:4000/invoices").then(({ data }) => data),

  createInvoice: (payload) => client.post("http://localhost:4000/invoices", payload).then(({ data }) => data),
}