<script>
import SNSButton from './SNSButton.vue';

export default {
    components: {
        SNSButton
    },
    data() {
        return {
            items: [
                { Link: "https://twitter.com/Oxojo_", url: "./X_Black.png", text: "X : @Oxojo_" },
                { Link: "https://github.com/Oxojo", url: "./GitHub_Black.png", text: "GitHub : @Oxojo" }
            ]
        }
    }
}
</script>
<template>
    <div class="Buttons">
        <SNSButton
            v-for="(item, index) in items"
            :key="index"
            :Link="item.Link"
            :Logo_url="item.url"
            :Text="item.text"
         />
    </div>
</template>

<style>
.Buttons {
    display: flex;
    width: 250px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}
</style>