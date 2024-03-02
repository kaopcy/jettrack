export const apiRoutes = {
  historyLog: {
    getAll: "http://localhost:3001/history",
    getById: (id: string) => `http://localhost:3001/history/${id}`,
    refetch: `http://localhost:3000/api/mock/history-log`,
  },
};
