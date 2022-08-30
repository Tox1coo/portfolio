<template>
  <Header v-once></Header>
  <Contact v-once></Contact>
  <div class="container">
    <About></About>
    <Skills></Skills>
    <PortfolioBlock></PortfolioBlock>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Contact from "@/components/Contact.vue";
import Skills from "@/components/Skills/Skills.vue";
import About from "@/components/About/About.vue";
import PortfolioBlock from "@/components/Portfolio/PortfolioBlock.vue";
export default {
  components: { Header, Contact, Skills, About, PortfolioBlock },
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
  overflow-x: hidden;
}
</style>
