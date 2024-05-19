<script setup>
import { z } from "zod";
import { useDashBoardStore } from "~/store/dashboard";
import { useAuthStore } from "~/store/auth";

const router = useRouter();
const authStore = useAuthStore();
const dashboardStore = useDashBoardStore();
const toast = useToast();

const schema = z.object({
  username: z.string(),
});
const state = reactive({
  username: undefined,
});

async function onSubmit() {
  try {
    dashboardStore.isLoading = true;
    const res = await $fetch(
      `https://pnwpmlbyeowa4xjnu3g7ra5ndu0vvtil.lambda-url.us-west-2.on.aws?username=${state.username}`,
      {
        method: "GET",
      }
    );
    dashboardStore.data = res.content;
    authStore.login(state.username);
    dashboardStore.isLoading = false;
    router.push("/dashboard");
  } catch (error) {
    console.error("An error occurred:", error);
    dashboardStore.isLoading = false;
    toast.add({
      title: "使用者名稱錯誤/請將IG設為公開",
      timeout: 3000,
    });
  }
}
</script>
<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup name="username" class="w-full">
      <UInput
        v-model="state.username"
        class="rounded-md"
        placeholder="IG使用者名稱"
      />
    </UFormGroup>
    <UButton v-if="!dashboardStore.isLoading" size="lg" block type="submit"
      >立即分析</UButton
    >
    <UButton v-else size="lg" block loading>立即分析</UButton>
  </UForm>
</template>
