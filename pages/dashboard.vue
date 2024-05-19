<script setup>
import { useAuthStore } from "~/store/auth";
import { useDashBoardStore } from "~/store/dashboard";

const authStore = useAuthStore();
const dashboardStore = useDashBoardStore();
const router = useRouter();
const items = []

const restaurants = ['12mini', 'hot7', 'thewang', '丰禾', '享鴨', '初瓦', '原燒', '和牛涮', '品田牧場', '嚮辣', '夏慕尼',
'尬鍋', '就饗', '旬嚐', '朝粥幫', '王品牛排', '石二鍋', '聚', '肉次方', '莆田', '藝奇', '西堤', '金咕', '阪前', '陶板屋', '青花驕']

const recommandPatternMatching = (text) => {
  restaurants.forEach(element => {
    if (text.includes(element)) {
      items.push(element)
    }
  });

}

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
recommandPatternMatching(recommand.message)

const mainTitle = "品味分析";
</script>
<template>
  <Navbar />
  <LogoutButton />
  <div class="min-h-screen py-32">
    <div class="text-3xl w-full flex items-center justify-center inter-font">
      {{ mainTitle }}
    </div>
    <div class="flex flex-col py-10 px-10 md:px-32 lg:px-56">
      <div v-for="rating in ratings" :key="rating.id">
        <div v-if="rating.score" class="flex flex-col mb-4">
          <div class="mb-1">{{ `${rating.id} - ${convertNum(rating.score)} 分` }}</div>
          <div
            :class="['bg-red-500/50', 'border', 'border-red-500', 'h-10']"
            :style="{ width: convertNum(rating.score) * 20 + '%' }"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col px-10 text-2xl ps-10 md:px-32 lg:px-56">
      <UCard class="mb-10">
        <template #header>
          <div>
            {{ `Hello ${ authStore.instaUsername } 這是給你的推薦！` }}
          </div>
        </template>

        <div class="text-xl">
          {{ recommand.message }}
        </div>
        
      </UCard>
      <UCarousel v-slot="{ item }" :items="items">
        <div class="w-[70vw] h-[300px] object-cover">
          <img :src="`https://wangpin-web-bucket.s3.us-west-2.amazonaws.com/logo/${item}.png`" class="absolute p-1 w-16 h-16 aspect-squares">
          <img :src="`https://wangpin-web-bucket.s3.us-west-2.amazonaws.com/${item}.jpg`" draggable="false" class="w-full" />
        </div> 
      </UCarousel>
    </div>
    
  </div>
</template>

<style scoped>
.inter-font {
  font-family: "Inter";
}
</style>
