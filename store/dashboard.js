import { defineStore } from "pinia";
import { ref } from "vue";

export const useDashBoardStore = defineStore(
  "dashboard",
  () => {
    const isLoading = ref(false);
    const data = ref([]);

    return { data, isLoading };
  },
  {
    persist: {
      storage: sessionStorage,
      paths: ["data"],
    },
  }
);
