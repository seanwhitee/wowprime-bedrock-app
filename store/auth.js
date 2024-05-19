import { defineStore } from "pinia";
import { ref } from "vue";
import { useDashBoardStore } from "./dashboard";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const dashboardStore = useDashBoardStore();
    const generateRandomId = (bytes = 16) => {
      const array = new Uint8Array(bytes)
      crypto.getRandomValues(array)
      return [...array].map((b) => b.toString(16).padStart(2, "0")).join("")
      
    }

    const instaUsername = ref("");
    const sessionId = ref("");
    

    const login = (username) => {
      instaUsername.value = username;
      sessionId.value = generateRandomId();
      
    };
    const logout = () => {
      instaUsername.value = "";
      sessionId.value = "";
      dashboardStore.data = [];
    };
    return { instaUsername, sessionId, login, logout};
  },
  {
    persist: {
      storage: sessionStorage,
      paths: ["instaUsername", "sessionId"],
    },
  }
);
