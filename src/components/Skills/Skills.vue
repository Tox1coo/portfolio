<template>
  <div ref="skills" id="skills" class="block skills animation">
    <h3 class="subtitle subtitle--body">My Skills</h3>
    <div class="skills__items">
      <SkillsItem
        class="animation"
        v-for="skillsItem in skillsList.skills"
        :key="skillsItem.title"
        :skillsItem="skillsItem"
      ></SkillsItem>
    </div>
  </div>
</template>

<script>
import animationScroll from "@/mixins/animationScroll";
import SkillsItem from "@/components/Skills/SkillsItem.vue";
import skills from "@/assets/data";
export default {
  data() {
    return {
      skillsList: skills,
      scroll: document.documentElement.scrollHeight,
    };
  },
  mounted() {
    setTimeout(() => {
      this.animationScrolling(this.$refs.skills);
    }, 500);
  },
  mixins: [animationScroll],
  components: { SkillsItem },
};
</script>

<style lang="scss" scoped>
.skills {
  &__items {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px 10%;
    @media (max-width: 800px) {
      justify-content: center;
      align-items: center;
    }
  }
}
</style>