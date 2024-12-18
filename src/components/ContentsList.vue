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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 64px;
}
</style>