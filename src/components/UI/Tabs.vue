<template>
  <div class="tabs">
    <div v-for="tabsItem in tabsList" :key="tabsItem.title" class="tabs__item">
      {{ tabsItem.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabsList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: center;
  gap: 50px;
  &__item {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>