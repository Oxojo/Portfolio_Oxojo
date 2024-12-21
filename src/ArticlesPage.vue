<script>
// trap.jp の api は https://blog-admin.trap.jp/ghost/api/admin/posts/?filter=authors.name:oxojo%2Bstatus:published から取れる
// image_url は feature_image から
// title は title から
// date は published_at から (すこし工夫が必要？)
// link は trap.jp
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

