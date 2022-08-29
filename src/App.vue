<template>
  <Header v-once></Header>
  <Contact v-once></Contact>
  <div class="container">
    <Skills></Skills>
    <Skills></Skills>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Contact from "@/components/Contact.vue";
import Skills from "@/components/Skills/Skills.vue";
export default {
  components: { Header, Contact, Skills },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
