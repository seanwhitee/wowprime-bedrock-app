<script setup></script>
<template>
  <GradientFog />
  <div class="py-20 md:py-32 lg:py-32">
    <div
      class="flex flex-col items-start text-white mx-auto px-10 w-10/12 md:w-1/2 lg:w-1/2 max-w-lg bg-black md:bg-zinc-950 lg:bg-zinc-950 rounded-2xl py-5 md:py-20 lg:py-10"
    >
      <div
        class="flex flex-col items-start w-full justify-center font-semibold text-lg md:text-2xl lg:text-2xl px-4 mb-4"
      >
        <NuxtLink
          to="/"
          external
          class="text-white flex items-center justify-center"
        >
          <img src="public/favicon.png" width="100" alt="logo" class="mb-8" />
        </NuxtLink>
        <p class="font-light text-4xl inter-font">
          立即開始分析
        </p>
      </div>
      <div class="w-full p-4">
        <LoginForm />
      </div>
    </div>
  </div>
</template>
<style scoped>
.inter-font {
  font-family: "Inter";
}
</style>
