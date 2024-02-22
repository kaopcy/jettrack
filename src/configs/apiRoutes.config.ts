export const apiRoutes = {
  historyLog: {
    getAll: "http://localhost:3000/api/mock/history-log",
    getById: (id: string) => `http://localhost:3000/api/mock/history-log/${id}`,
  },
};
