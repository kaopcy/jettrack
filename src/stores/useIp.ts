import { create } from "zustand";

type IpStore = {
  ip: string | null;
  setIp: (newIp: string) => void;
};

export const useIp = create<IpStore>((set) => ({
  ip: null,
  setIp: (newIp) => {
    set({ ip: newIp });
  },
}));
