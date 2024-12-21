<script>
import ArticleCardDetail from './components/ArticleCardDetail.vue';

export default {
    components: {
        ArticleCardDetail
    },
    data() {
        return {
            title: "Title",
            date: "yyyy-mm-dd",
            link: "example.com"
        }
    }
};
</script>

<template>
    <ArticleCardDetail :title="title" :date="date" :link="link" />
</template>