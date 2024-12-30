<script>
export default {
    props: {
        Link: String,
        Logo_url: String,
        Text: String
    }
}
</script>

<template>
    <a :href="Link" target="_blank">
        <div class="Button">
            <div class="details">
                <img :src="Logo_url" alt="">
                <div class="text">{{ Text }}</div>
            </div>
        </div>
    </a>
</template>

<style>
.details {
    display: flex;
    align-items: center;
    gap: 10px;
}
.Button {
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-self: stretch;
    align-items: flex-start;

    border-radius: 10px;
    border: 1px solid #D9A90E;
    background: white;
    width: 210px;
    height: 35px;   
}
.text {
    color: #000;
    font-family: 'Inria Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    border: none;
}
a {
    text-decoration: none;
}
</style>