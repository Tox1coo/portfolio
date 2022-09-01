<template>
  <div class="portfolio__card animation-show">
    <div class="portfolio__card-img">
      <img :src="require(`@/assets/cards/${cardInfo.imageName}.jpg`)" />
    </div>

    <div class="portfolio__card-info">
      <h3 class="subtitle subtitle--item">
        Project name: {{ cardInfo.title }}
      </h3>
      <p class="text text--card">{{ cardInfo.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio__card {
  min-width: 49%;
  max-width: 49%;

  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
  text-align: left;
  font-size: 10px;
  &-img {
    width: 100%;
    overflow: hidden;
    padding: 0px 0px 58% 0px;
    position: relative;

    img {
      width: 100%;
      max-width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
      top: 0;
      left: 0;
    }

    &::after {
      content: "";
      bottom: 0;
      position: absolute;
      height: 50%;

      display: block;
      z-index: 100;
      width: 100%;
      background-image: linear-gradient(
        0deg,
        #aaa 0,
        transparent 70%,
        transparent
      );
    }
  }
  &-info {
    padding: 10px;
    .subtitle {
      margin-bottom: 5px;
      text-transform: none;
    }
  }
  @media (max-width: 1100px) {
    min-width: 55%;
  }
  @media (max-width: 785px) {
    font-size: 8px;
    .subtitle {
      font-size: 20px;
    }
  }
  @media (max-width: 630px) {
    min-width: 100%;
  }
  @media (max-width: 360px) {
    font-size: 7px;
    .subtitle {
      font-size: 18px;
    }
  }
}
</style>