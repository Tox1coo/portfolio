<template>
  <div v-intersection="animationScrolling" class="observer"></div>

  <div
    v-if="isScroll"
    :class="{ 'animation-left': isScroll }"
    ref="skills"
    id="skills"
    class="block skills"
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
  }
}
</style>