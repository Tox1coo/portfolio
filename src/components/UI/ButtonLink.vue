<template>
  <a :href="link" target="_blank" class="btn btn--link"><slot></slot></a>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    link: {
      type: String,
      required: true,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>