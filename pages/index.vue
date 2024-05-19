<script setup>
import { useAuthStore } from "~/store/auth";
const router = useRouter();
const authStore = useAuthStore();

if (authStore.instaUsername) {
  router.push("/dashboard");
}
</script>
<template>
  <GradientFog />
  <navbar />
  <EntryButton />
  <div class="flex items-center justify-center px-10 pt-80">
    <div class=" text-6xl md:text-8xl lg:text-8xl flex flex-col w-4/5 mx-auto justify-start inter-font font-light">
      
      <p class="text-white mb-4">
        使用
        <span class="text-red-500">王</span>
        <span class="text-white">小</span>
        <span class="text-red-500">品</span>
      </p>
      <p class="text-white text-xl">獲得個人化分析</p>
    </div>

    <!-- <div
      class="rounded-lg hidden md:flex lg:flex items-center justify-center md:w-8/12 lg:w-8/12 p-1
      bg-zinc-900"
    >
      <NuxtImg src="feature-screenshot.png" alt="feature-screenshot" class="rounded-lg" />
    </div> -->
  </div>
</template>
<style scoped>
.inter-font {
  font-family: "Inter";
}
</style>
