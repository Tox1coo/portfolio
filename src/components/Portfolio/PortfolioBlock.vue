<template>
  <div id="portfolio" class="portfolio block animation">
    <h3 class="subtitle subtitle--body">My Portfolio</h3>
    <Tabs class="animation" :tabsList="tabsList"></Tabs>
    <div class="portfolio__cards">
      <PortfolioCard
        v-for="cardItem in cardList"
        :key="cardItem.title + cardItem.key"
        class="animation"
        :cardInfo="cardItem"
      ></PortfolioCard>
    </div>
  </div>
</template>

<script>
import data from "@/assets/data";
import animationScroll from "@/mixins/animationScroll";
import PortfolioCard from "@/components/Portfolio/PortfolioCard.vue";
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
      cardList: data.portfolio,
    };
  },
  mounted() {
    this.animationScrolling();
  },
  mixins: [animationScroll],
  components: { PortfolioCard },
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px 0px;
    @media (max-width: 1100px) {
      justify-content: center;
    }
  }
}
</style>