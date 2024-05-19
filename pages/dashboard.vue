<script setup>
import { useAuthStore } from "~/store/auth";
import { useDashBoardStore } from "~/store/dashboard";

const authStore = useAuthStore();
const dashboardStore = useDashBoardStore();
const router = useRouter();

const convertNum = (rate) => {
  return parseInt(rate);
};

if (!authStore.instaUsername) {
  router.push("/");
}
const contentTitleMap = {
  chinese: "中式料理",
  japanese: "日式料理",
  korean: "韓式料理",
  thai: "泰式料理",
  american: "美式料理",
  recommand: "推薦"
};
const res = ref("");
dashboardStore.data.map((s) => {
  res.value += s;
});
const dom = new DOMParser().parseFromString(res.value, "text/html");
const keys = ["chinese", "japanese", "korean", "thai", "american"];
// const values = keys.map((key) => dom.querySelector(key)?.textContent);
// create a rating map for each keys map to values
const ratings = [];
keys.forEach((element) => {
  const rating = {};
  rating["id"] = contentTitleMap[element];
  rating["score"] = dom.querySelector(element)?.textContent.trim();
  ratings.push(rating);
});

const recommand = {
  id: "recommand",
  message: dom.querySelector("recommand")?.textContent.trim(),
};

const mainTitle = "品味分析";
</script>
<template>
  <Navbar />
  <LogoutButton />
  <div class="min-h-screen py-32">
    <div class="text-3xl w-full flex items-center justify-center inter-font">
      {{ mainTitle }}
    </div>
    <div class="flex flex-col py-10 ps-10 md:px-32 lg:px-56">
      <div v-for="rating in ratings" :key="rating.id">
        <div v-if="rating.score" class="flex flex-col mb-4">
          <div class="mb-1">{{ `${rating.id} - ${convertNum(rating.score)} 分` }}</div>
          <div
            :class="['bg-red-500/50', 'border', 'border-red-500', 'h-10']"
            :style="{ width: convertNum(rating.score) * 15 + 'vw' }"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col px-10 text-2xl ps-10 md:px-32 lg:px-56">
      <UCard>
        <template #header>
          <div>
            {{ `Hello ${ authStore.instaUsername } 這是給你的推薦！` }}
          </div>
        </template>

        <div class="text-xl">
          {{ recommand.message }}
        </div>
      </UCard>
    </div>
  </div>
</template>

<style scoped>
.inter-font {
  font-family: "Inter";
}
</style>
