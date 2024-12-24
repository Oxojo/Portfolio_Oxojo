<script>
// trap.jp の api は https://blog-admin.trap.jp/ghost/api/admin/posts/?filter=authors.name:oxojo%2Bstatus:published から取れる
// image_url は feature_image から
// title は title から
// date は published_at から (すこし工夫が必要？)
// link は trap.jp
import ArticleCard from './components/ArticleCard.vue';
import axios from 'axios'

export default {
    components: {
        ArticleCard
    },
    data() {
        return {
            items: [],
            loading: true,
            error: null
        };
    },
    created() {
        this.fetchData();
    }   ,
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('https://blog-admin.trap.jp/ghost/api/admin/posts/?filter=authors.name:oxojo%2Bstatus:published');
                this.items = response.data.posts.map(post => (
                    {
                        image_url: post.feature_image,
                        title: post.title,
                        date: post.published_at,
                        link: "trap.jp"
                    }
                ));
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
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