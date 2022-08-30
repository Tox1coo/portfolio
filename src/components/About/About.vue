<template>
  <div v-intersection="animationScrolling" class="observer"></div>
  <div
    v-if="isScroll"
    :class="{ animation: isScroll }"
    id="about"
    class="block about"
  >
    <div class="about__inner">
      <h3 class="subtitle subtitle--body">About me</h3>
      <p class="text">
        Я студент, начинающий Front-end разработчик. Моя страсть &#8213;
        создавать привлекательные и удобные веб-сайты. Я занимаюсь
        веб-разработкой с июля 2021 года. При разработке использую Vue 3 вместе
        с Vuex и Sass.
      </p>
    </div>
  </div>
</template>

<script>
import animationScroll from "@/mixins/animationScroll";
export default {
  data() {
    return {};
  },
  mixins: [animationScroll],
};
</script>

<style lang="scss" scoped>
.about {
  &__inner {
    .text {
      text-align: left;
      margin-top: 25px;
      text-indent: 20px;
    }
  }
}
</style>