<script>
import ArticleCard from './components/ArticleCard.vue';

export default {
    components: {
        ArticleCard
    },
    data() {
        return {
            image_url: "../Oxojo_icon.png",
            title: "Title",
            date: "yyyy-mm-dd",
            link: "example.com"
        }
    }   
};
</script>

<template>
    <ArticleCard :image_url="image_url" :title="title" :date="date" :link="link" />
</template>