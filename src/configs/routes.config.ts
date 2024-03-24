export const routes = {
  dashBoard: {
    ip: (ip: string) => ({
      realTime: `/dashboard/${ip}/real-time`,
      history: {
        index: `/dashboard/${ip}/history`,
        id: (id: string) => `/dashboard/${ip}/history/${id}`,
      },
    }),
    noIp: (base: string) => `/dashboard/${base}-random`,
    settings: "/dashboard/settings",
  },
  home: "/home",
  signIn: "/auth/sign-in",
};
