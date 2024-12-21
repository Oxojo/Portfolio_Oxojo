<script setup>
import HeaderNavi from './components/HeaderNavi.vue';
//import TopPage from './TopPage.vue';
import ArticlesPage from './ArticlesPage.vue';
</script>

<template>
  <header>
    <HeaderNavi />
  </header>

  <main>
    <div class="Component">
      <ArticlesPage />
    </div>
  </main>
</template>

<style scoped>
.Component {
  margin: 50px 0;
}
</style>
