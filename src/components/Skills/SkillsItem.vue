<template>
  <div class="skills__item">
    <img
      width="70"
      height="70"
      :src="require(`@/assets/${skillsItem.imageName}.png`)"
      alt=""
    />
    <h3 class="subtitle subtitle--item">{{ skillsItem.title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    skillsItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
%center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.skills__item {
  @extend %center;
  width: 200px;
  height: 200px;
  border: 3px solid #ff8080;
  border-radius: 50%;
  flex-direction: column;
}
</style>