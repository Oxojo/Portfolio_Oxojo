<script setup>
    import BigIcon from './BigIcon.vue';
    import BigTitle from './BigTitle.vue';
</script>

<template>
    <div class="Title">
        <BigIcon />
        <BigTitle />
    </div>
</template>

<style>
.Title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
</style>