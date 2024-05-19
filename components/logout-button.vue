<script setup>
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
const router = useRouter();
const customLogout = () => {
  authStore.logout();
  router.push("/");
};
</script>
<template>
  <button class="flex items-center fixed right-2 top-2.5">
    <button
      @click="customLogout"
      class="rounded-md bg-zinc-800 hover:bg-zinc-800/90 flex items-center justify-center text-white
      py-2 px-4 cursor-pointer opacity-80"
    >
      登出
    </button>
  </button>
</template>
