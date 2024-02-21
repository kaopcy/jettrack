import { createContext, FC, ReactNode, useContext, useRef } from "react";
import { createStore, StateCreator, StoreApi, useStore } from "zustand";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

function buildStoreContext<State extends object>(creator: StateCreator<State>) {
  const Context = createContext<StoreApi<State> | null>(null);

  const Provider: FC<{ children: ReactNode; overrideState?: DeepPartial<State> }> = ({ children, overrideState }) => {
    const storeRef = useRef<null | StoreApi<State>>();
    storeRef.current = createStore((...initializer) => {
      const state = creator(...initializer);
      return { ...state, ...overrideState };
    });

    return <Context.Provider value={storeRef.current}>{children}</Context.Provider>;
  };

  const buildStateHook = () =>
    function useStoreSelectorHook<SelectedState>(selector: (state: State) => SelectedState) {
      const store = useContext(Context);
      if (!store) throw new Error("Cannot initialize state hook outside of provider");

      return useStore<StoreApi<State>, SelectedState>(store, selector);
    };

  return { Provider, Context, buildStateHook };
}

export default buildStoreContext;
