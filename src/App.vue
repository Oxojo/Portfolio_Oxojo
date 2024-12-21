<script setup>
import HeaderNavi from './components/HeaderNavi.vue';
import TopPage from './TopPage.vue';
//import ArticlesPage from './ArticlesPage.vue';
</script>
  
<template>
  <header>
    <HeaderNavi />
  </header>

  <main>
    <div class="Component">
      <TopPage />
    </div>
  </main>

  <footer>
    (C) 2024 Oxojo
  </footer>
</template>

<style scoped>
.Component {
  margin: 50px 0;
}
footer {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px 10px;
  width: auto;
  align-items: right;

  color: #000;
  font-family: "Inria Sans";
  font-size: 16px;
}
</style>
