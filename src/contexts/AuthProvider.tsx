"use client";

import { User } from "next-auth";
import { createContext, FC, ReactNode, useContext, useRef } from "react";
import { createStore, StoreApi, useStore } from "zustand";

type NextAuthSessionUser = DeepPartial<Omit<User, "id">>;

type AuthStore = {
  user: NextAuthSessionUser | null;
};

const AuthContext = createContext<null | StoreApi<AuthStore>>(null);

type DeepPartial<T extends object> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export const AuthProvider: FC<{ children: ReactNode; initUser: NextAuthSessionUser | null }> = ({
  children,
  initUser,
}) => {
  const storeRef = useRef<StoreApi<AuthStore>>();

  if (!storeRef.current) {
    storeRef.current = createStore<AuthStore>(() => ({
      user: initUser,
    }));
  }

  return <AuthContext.Provider value={storeRef.current}>{children}</AuthContext.Provider>;
};

export function useAuthStore<T>(selector: (AuthStore: AuthStore) => T): T {
  const authStore = useContext(AuthContext);

  if (!authStore) throw new Error("this hook must use under AuthProvider");
  const state = useStore(authStore, selector);

  return state;
}
