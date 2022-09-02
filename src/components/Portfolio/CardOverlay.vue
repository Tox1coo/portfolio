<template>
  <div class="portfolio__card-overlay overlay">
    <h3 class="subtitle subtitle--item">{{ cardItemInfo.infoTitle }}</h3>
    <ul class="overlay__structure">
      <li
        class="overlay__structure-item"
        v-for="(titleTech, index) in cardItemInfo.structure"
        :key="titleTech + index"
      >
        {{ titleTech }}
      </li>
    </ul>
    <div class="overlay__buttons">
      <ButtonLink v-if="cardItemInfo.linkSite" :link="cardItemInfo.linkSite"
        >Site</ButtonLink
      >
      <ButtonLink :link="cardItemInfo.linkGit">Repository</ButtonLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardItemInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$items: 10;
.overlay {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(#fff, 0.9);
  top: 0;
  left: 0;
  z-index: 1000;
  font-size: 2em;
  transform: translateY(100%);
  padding: 50px;
  transition: all 0.6s ease;
  @media (max-width: 500px) {
    padding: 20px;
  }
  @media (max-width: 350px) {
    padding: 12px;
  }
  .subtitle {
    font-style: italic;
    margin-bottom: 5px;
    text-transform: none;
  }
  &__structure {
    display: flex;
    list-style: none;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 25px;
    &-item {
      visibility: hidden;
      opacity: 0;
      transform: translate(-100%, 0px);
      &::before {
        content: "";
        display: inline-block;
        background-image: url("../../assets/cirlce.svg");
        background-size: cover;
        width: 15px;
        height: 15px;
        margin-right: 5px;
      }
    }
    @media (max-width: 350px) {
      margin-top: 10px;
    }
  }
  &__buttons {
    position: absolute;
    bottom: 25px;
    display: flex;
    gap: 15px;
    .btn {
      visibility: hidden;
      opacity: 0;
      transform: translate(0, -100%);
    }
  }
}

@for $i from 1 through $items {
  .overlay__structure-item:nth-child(#{$i}) {
    transition: all 1s ease $i * 0.1s;
  }
}

@for $i from 1 through 2 {
  .overlay__buttons .btn:nth-child(#{$i}) {
    transition: transform 1s ease $i * 0.1s, opacity 1s ease $i * 0.1s,
      visibility 1s ease $i * 0.1s, background-color 0.3s ease-in-out;
  }
}
</style>