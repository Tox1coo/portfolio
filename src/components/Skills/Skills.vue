<template>
  <div
    v-intersection="animationScrolling"
    ref="skills"
    id="skills"
    class="skills"
  >
    <div class="skills__inner">
      <h3 class="subtitle subtitle--body">My Skills</h3>
      <div v-show="isScroll" class="skills__items">
        <SkillsItem
          v-for="skillsItem in skillsList.skills"
          :key="skillsItem.title"
          :skillsItem="skillsItem"
        ></SkillsItem>
      </div>
    </div>
  </div>
</template>
        v-on="{ animationScroll: animationScroll() }"

<script>
// import animationScroll from "@/mixins/animationScroll";
import SkillsItem from "@/components/Skills/SkillsItem.vue";
import skills from "@/assets/data";
export default {
  data() {
    return {
      skillsList: skills,
      isScroll: false,
      scroll: document.documentElement.scrollHeight,
    };
  },
  /*   mounted() {
    this.animationScroll();
  }, */
  methods: {
    animationScrolling() {
      this.isScroll = true;
    },
  },
  // mixins: [animationScroll],
  components: { SkillsItem },
};
</script>

<style lang="scss" scoped>
.skills {
  margin-bottom: 50px;
  visibility: hidden;
  opacity: 0;
  &__inner {
    .subtitle {
      text-align: left;
    }
  }

  &__items {
    margin-top: 25px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px 10%;
  }
}
</style>