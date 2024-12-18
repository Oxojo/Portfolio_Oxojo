<script setup>
import HomeLink from './HomeLink.vue';
import MainMenu from './MainMenu.vue';
</script>

<template>
    <div class="Navi">
        <HomeLink />
        <MainMenu />
    </div>
</template>

<style>
.Navi {
    display: flex;
    width: auto;
    padding: 10px 40px;
    justify-content: space-between;
    align-items: center;
}
</style>