<script>
import SNSButton from './SNSButton.vue';

export default {
    components: {
        SNSButton
    },
    data() {
        return {
            items: [
                { url: "./X_Black.png", text: "X : @Oxojo_" },
                { url: "./GitHub_Black.png", text: "GitHub : @Oxojo" }
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