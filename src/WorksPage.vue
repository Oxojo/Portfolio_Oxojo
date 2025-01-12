<script>
import WorksCard from './components/WorksCard.vue';

export default {
    components: {
        WorksCard
    },
    data() {
        return {
            items: [
                {image_url: "../Oxojo.dev_ogp.png", title: "Oxojo.dev", url: "/works/01"}
            ]
        }
    }   
};
</script>

<template>
    <h1 class="title">Works</h1>
    <div class="Cards">
        <WorksCard 
            v-for="(item, index) in items"
            :key="index"
            :image_url="item.image_url"
            :title="item.title"
            :url="item.url"
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
    border: none;
}
</style>