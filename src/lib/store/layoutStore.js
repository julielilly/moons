import { create } from "zustand";

const useLayoutStore = create((set) => ({
  headerHeight: 0,
  setHeaderHeight: (height) => set({ headerHeight: height }),
}));

export default useLayoutStore;
