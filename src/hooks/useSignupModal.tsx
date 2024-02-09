import { create } from "zustand";

type SignUpModalState = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const useSignUpModal = create<SignUpModalState>((set) => ({
  isOpen: false,
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSignUpModal;
