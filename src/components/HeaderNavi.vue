<script setup>
import HomeLink from './HomeLink.vue';
</script>

<template>
        <div class="Navi">
            <router-link to="/" class="Link"><HomeLink /></router-link>
            <div class="Menu">
                <router-link to="/comingsoon" class="Contents">About Me</router-link>
                <router-link to="/comingsoon" class="Contents">Works</router-link>
                <router-link to="/comingsoon" class="Contents">Articles</router-link>
            </div>
        </div>
</template>

<style>
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
    text-decoration: none;
    color: #000;
    font-family: "Inria Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding: 10px 5px;
}
.Link {
    text-decoration: none;
}
</style>