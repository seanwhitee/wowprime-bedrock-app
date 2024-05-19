<script setup></script>
<template>
  <div class="bg-black box-border w-full border-b border-gray-500/50 flex items-center justify-between
  px-4 py-2 fixed">

    <div class="flex items-center text-lg font-bold my-2 inter-font">
      <NuxtLink to="/" external class="text-white flex items-center justify-center">
        <span class="text-red-500">王</span>
        <span class="text-white">小</span>
        <span class="text-red-500" style="z-index: 1">品</span>
      </NuxtLink>
    </div>
  </div>

</template>
<style scoped>
.inter-font {
  font-family: 'Inter';
}
</style>