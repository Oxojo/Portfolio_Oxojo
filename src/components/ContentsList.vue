<script setup>
import AboutMeContent from './AboutMeContent.vue';
import WorksContent from './WorksContent.vue';
import ArticlesContent from './ArticlesContent.vue';
</script>

<template>
    <div class="ContentsList">
        <AboutMeContent />
        <WorksContent />
        <ArticlesContent />
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