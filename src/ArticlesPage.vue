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
            items: [
                {imate_url: "../Oxojo_icon.png", title: "Test1", date: "1111-11-11", link: "example.com"},
                {imate_url: "../Oxojo_icon.png", title: "Test2", date: "2222-22-22", link: "example.com"},
                {imate_url: "../Oxojo_icon.png", title: "Test3", date: "3333-33-33", link: "example.com"},
                {imate_url: "../Oxojo_icon.png", title: "Test4", date: "4444-44-44", link: "example.com"}
            ]
        }
    }   
};
</script>

<template>
    <h1 class="title">Articles</h1>
    <div class="Cards">
        <ArticleCard 
            v-for="(item, index) in items"
            :key="index"
            :image_url="item.image_url"
            :title="item.title"
            :date="item.date"
            :link="item.link"
        />
    </div>
</template>

<style>
.title {
    color: #D9A90E;
    font-family: "Inria Sans";
    font-size: 64px;
    font-style: normal;
    text-align: center;
}
.Cards {
    padding: 0 50px;
    width: auto;
    display: flex;
    gap: 80px;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;
}
</style>