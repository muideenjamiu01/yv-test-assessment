import createApiClient from "./AxiosInstance";

// Create an Axios instance
const client = createApiClient();

export const api = {
  //LOGIN
  login: (payload) =>
    client.post("/admin/login", payload).then(({ data }) => data),

  logout: () => client.post("/admin/logout").then(({ data }) => data),

  getOverview: (startDate, endDate) =>
    client
      .get(`/user/admin/overview?startDate=${startDate}&endDate=${endDate}`)
      .then(({ data }) => data),

  getRevenue: ({ startDate, endDate, pageNumber, pageSize, searchTerm, sortColumn,
    sortOrder }) =>
    client
      .get(
        `user/admin/revenue?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
      )
      .then(({ data }) => data),

  getTickets: ({
    startDate,
    endDate,
    pageNumber,
    pageSize,
    searchTerm,
    sortColumn,
    sortOrder,
  }) =>
    client
      .get(
        `/user/admin/ticket?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
      )
      .then(({ data }) => data),

  getSponsors: ({
    startDate,
    endDate,
    pageNumber,
    pageSize,
    searchTerm,
    sortColumn,
    sortOrder,
  }) =>
    client
      .get(
        `/user/admin/sponsor?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
      )
      .then(({ data }) => data),
      
  getSponsorDetail: (user_id) =>
    client
      .get(
        `/user/admin/sponsor/${user_id}`
      )
      .then(({ data }) => data),

  getParticipants: ({
    startDate,
    endDate,
    pageNumber,
    pageSize,
    searchTerm,
    sortColumn,
    sortOrder,
  }) =>
    client
      .get(
        `/user/admin/participant?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
      )
      .then(({ data }) => data),

  getUsers: ({ startDate,
    endDate,
    pageNumber,
    pageSize,
    searchTerm,
    sortColumn,
    sortOrder, }) =>
    client
      .get(
        `/user/admin/user?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
      )
      .then(({ data }) => data),

  getAttendees: ({
    startDate,
    endDate,
    pageNumber,
    pageSize,
    searchTerm,
    sortColumn,
    sortOrder,
  }) =>
    client
      .get(
        `/user/admin/attendant?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`
      )
      .then(({ data }) => data),

  getComplimentary: ({
    startDate,
    endDate,
    pageNumber,
    pageSize,
    searchTerm,
    sortColumn,
    sortOrder,
    complementary=true
  }) =>
    client
      .get(
        `/user/admin/complementary?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}&complementary=${complementary}`
      )
      .then(({ data }) => data),

  downloadTicket: ({ startDate, endDate, searchTerm, sortColumn, sortOrder }) =>
    client
      .get(
        `/user/admin/download-ticket?startDate=${startDate}&endDate=${endDate}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`,
        {
          responseType: "blob",
        }
      )
      .then(({ data }) => data),

  downloadSponsor: ({
    startDate,
    endDate,
    searchTerm,
    sortColumn,
    sortOrder,
  }) =>
    client
      .get(
        `/user/admin/download-sponsor?startDate=${startDate}&endDate=${endDate}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`,
        {
          responseType: "blob",
        }
      )
      .then(({ data }) => data),

  downloadForTicketActivation: ({
    startDate,
    endDate,
    searchTerm,
    sortColumn,
    sortOrder,
  }) =>
    client
      .get(
        `/user/admin/download-participant?startDate=${startDate}&endDate=${endDate}&searchTerm=${searchTerm}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`,
        {
          responseType: "blob",
        }
      )
      .then(({ data }) => data),

  downloadAdminUser: ({ pageNumber, pageSize, sortColumn, sortOrder }) =>
    client
      .get(
        `/user/admin/download-admin?&pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`,
        {
          responseType: "blob",
        }
      )
      .then(({ data }) => data),

  downloadAttendant: ({ pageNumber, pageSize, sortColumn, sortOrder }) =>
    client
      .get(
        `/user/admin/download-attendant?&pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`,
        {
          responseType: "blob",
        }
      )
      .then(({ data }) => data),

  downloadComplimentary: ({ pageNumber, pageSize, sortColumn, sortOrder }) =>
    client
      .get(
        `/user/admin/download-complementary?&pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&sortOrder=${sortOrder}`,
        {
          responseType: "blob",
        }
      )
      .then(({ data }) => data),

  downloadSingleTicket: (userId) =>
    client
      .get(`/user/admin/download-single-ticket/${userId}`, {
        responseType: "blob",
      })
      .then(({ data }) => data),

  downloadPaymentHistory: (searchTerm) =>
    client
      .get(`/user/admin/download-payment-history?searchTerm=${searchTerm}`, {
        responseType: "blob",
      })
      .then(({ data }) => data),

  addEditSponsor: (formData) =>
    client
      .put(`/user/admin/add-edit-sponsor`, formData)
      .then(({ data }) => data),

  addEditAdmin: (formData) =>
    client.put(`/user/admin/add-edit-admin`, formData).then(({ data }) => data),

  paymentHistory: (formData) =>
    client.post(`/user/admin/payment-history`, formData).then(({ data }) => data),

  paymentStatus: (formData) =>
    client.post(`/user/admin/payment-status`, formData).then(({ data }) => data),

  requiryPayment: (formData) =>
    client.post(`/user/admin/requiry-payment`, formData).then(({ data }) => data),

    generateTickets: (userId, refId) =>
    client
      .get(`/user/steam-ticket/${userId}?txn_ref=${refId}`)
      .then(({ data }) => data),

    sendTickets: (payload) =>
    client
      .post(`/user/admin/send-ticket`, payload)
      .then(({ data }) => data),

    scanTickets: (payload) =>
    client
      .post(`/user/admin/scan-tickets`, payload)
      .then(({ data }) => data),
    confirmTicket: (payload) =>
    client
      .post(`/user/admin/confirm-ticket`, payload)
      .then(({ data }) => data),

    getLeaderBoardVote: () =>
    client
      .get(`/user/vote-leaderboard`)
      .then(({ data }) => data),

    getOverAllSummary: () =>
    client
      .get(`/user/overall-summary`)
      .then(({ data }) => data),
      
    getScanTicketSummary: (id) =>
    client
      .get(`/user/admin/ticket-scan-summary?admin_id=${id}      
      `)
      .then(({ data }) => data),

      getDailyVoteTableSummary: () =>
        client
          .get(`/user/vote-daily-summary`)
          .then(({ data }) => data),

      downloadVoteTableSummary: () =>
        client
          .get(`/user/vote-daily-summary&download=true`, {
        responseType: "blob",
      })
          .then(({ data }) => data),

      castVote: (payload) =>
        client.post("/user/vote", payload).then(({ data }) => data),
};
