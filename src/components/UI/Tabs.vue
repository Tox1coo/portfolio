<template>
  <div class="tabs animation-show">
    <div
      :class="{ tabs__active: tabsItem.type === activeType }"
      v-for="tabsItem in tabsList"
      :key="tabsItem.title"
      class="tabs__item"
    >
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
    activeType: {
      type: String,
      default: "all",
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
  &__item {
    font-size: 20px;
    cursor: pointer;
  }
  &__active {
    color: $primaryActive;
    border-bottom: 2px solid $primaryActive;
  }
}
</style>