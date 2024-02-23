export const routes = {
  dashBoard: {
    realTime: "/dashboard/real-time",
    history: {
      index: "/dashboard/history",
      id: (id: string) => `/dashboard/history/${id}`,
    },
    settings: "/dashboard/settings",
  },
  home: "/home",
  signIn: "/auth/sign-in",
};
