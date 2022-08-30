<template>
  <div v-intersection="animationScrolling" class="observer"></div>
  <div
    v-if="isScroll"
    :class="{ 'animation-left': isScroll }"
    id="portfolio"
    class="block portfolio"
  >
    <div class="portfolio__inner">
      <h3 class="subtitle subtitle--body">My Portfolio</h3>
      <Tabs :tabsList="tabsList"></Tabs>
    </div>
  </div>
</template>

<script>
import animationScroll from "@/mixins/animationScroll";
export default {
  data() {
    return {
      tabsList: [
        {
          title: "All",
          type: "all",
        },
        {
          title: "Websites",
          type: "website",
        },
        {
          title: "Bots",
          type: "bot",
        },
      ],
    };
  },
  mixins: [animationScroll],
};
</script>

<style lang="scss" scoped>
</style>