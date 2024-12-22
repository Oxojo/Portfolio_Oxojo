<script setup>
import HomeLink from './components/HomeLink.vue';
</script>
  
<template>
  <header>
    <div class="Navi">
            <router-link to="/"><HomeLink /></router-link>
            <div class="Menu">
              <div class="Contents"><router-link to="/comingsoon">About Me</router-link></div>
              <div class="Contents"><router-link to="/comingsoon">Works</router-link></div>
              <div class="Contents"><router-link to="/comingsoon">Articles</router-link></div>  
            </div>
        </div>
  </header>

  <main>
    <div class="Component">
      <router-view />
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
.Navi {
    display: flex;
    width: auto;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
}
@media screen and (max-width: 800px) {
    .Navi {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: auto;
        padding: 10px 20px;
        justify-content: space-between;
        align-items: center;
    }
}
.Menu {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-shrink: 0;
}
.Contents {
    color: #000;
    font-family: "Inria Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding: 10px 5px;
}
</style>
