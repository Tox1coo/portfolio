<template>
  <div ref="about" id="about" class="block about animation">
    <h3 class="subtitle subtitle--body">About me</h3>
    <p class="text animation animation-show">
      Я студент, начинающий Front-end разработчик. Я занимаюсь веб-разработкой с
      июля 2021 года. При разработке использую Vue 3 вместе с Vuex и Sass.
    </p>
  </div>
</template>

<script>
import animationScroll from "@/mixins/animationScroll";
export default {
  mounted() {
    this.animationScrolling();
  },
  mixins: [animationScroll],
};
</script>

<style lang="scss" scoped>
.about {
  .text {
    text-align: left;
    margin-top: 25px;
    text-indent: 20px;
  }
}
</style>