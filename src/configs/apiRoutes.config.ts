import { env } from "@/configs/env";

export const apiRoutes = {
  userLog: {
    logIn: ({ username, password }) =>
      `${env.backendBaseUrl}/api/auth/login-nextauth?username=${username}&password=${password}`,
    adminSignUp: `${env.backendBaseUrl}/api/auth/signup`,
  },
  historyLog: {
    connectCamera: `${env.backendBaseUrl}/api/history/connect-camera`,
    getAllCars: `${env.backendBaseUrl}/api/history/events`,
    getCarById: (id: string) => `${env.backendBaseUrl}/api/history/car/${id}`,
    refetch_old: `http://localhost:3000/api/mock/history-log`,
    refetch: `http://localhost:3000/api/mock/history-log`,
  },
  settingLog: {
    getAllUsers: (ip: string) => `${env.backendBaseUrl}/api/setting/users-camera/${ip}`,
    addUser: `${env.backendBaseUrl}/api/setting/add-user`,
    deleteUser: `${env.backendBaseUrl}/api/setting/delete-user`,
    resetPwd: `${env.backendBaseUrl}/api/setting/reset-pwd`,
  },
};
