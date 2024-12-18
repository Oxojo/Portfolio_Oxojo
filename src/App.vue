<script setup>
import HeaderNavi from './components/HeaderNavi.vue';
import HomeTitle from './components/HomeTitle.vue';
import ContentsList from './components/ContentsList.vue';
import CommonFooter from './components/CommonFooter.vue';
</script>

<template>
  <header>
    <HeaderNavi />
  </header>

  <main>
    <HomeTitle />
    <ContentsList />
  </main>

  <footer>
    <CommonFooter />
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #D9A90E;
  width: 100vw; 
}
</style>
