import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create((set) => ({
  theme: "default",
  initializeTheme: async () => {
    try {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme != null) {
        set({ theme: savedTheme });
      }
    } catch (e) {
      console.warn("Theme not found", e);
    }
  },
  changeTheme: () => {
    set((state) => {
      const newTheme = state.theme === "default" ? "dark" : "default";
      AsyncStorage.setItem("theme", newTheme).catch((error) => {
        console.warn("Theme change failed", error);
      });
      return { theme: newTheme };
    });
  },
}));
