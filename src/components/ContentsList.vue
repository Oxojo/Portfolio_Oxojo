<script setup>
import AboutMeContent from './AboutMeContent.vue';
import WorksContent from './WorksContent.vue';
import ArticlesContent from './ArticlesContent.vue';
</script>

<template>
    <div class="ContentsList">
        <router-link to="/aboutme" class="Link"><AboutMeContent /></router-link>
        <router-link to="/comingsoon" class="Link"><WorksContent /></router-link>
        <router-link to="/comingsoon" class="Link"><ArticlesContent /></router-link>
    </div>
</template>

<style>
.ContentsList {
    margin-top: 60px;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 64px;
}

@media screen and (max-width: 800px) {
    .ContentsList {
        margin-top: 60px;
        padding: 0 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>