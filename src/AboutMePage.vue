<script>
    import AboutMeTopContent from './components/AboutMeTopContent.vue';
    

    export default {
        components: {
            AboutMeTopContent
        }
    }
</script>

<template>
    <div class="Contents">
        <h1 class="title">About Me</h1>
        <AboutMeTopContent />
        <div class="Detail">
            <div class="ContentTitle">
                Status
            </div>
            <div class="ContentDetail">
                Science Tokyo B1 <br>
                Belong to: traP, Tech-nation Records
            </div>
        </div>
        <div class="Detail">
            <div class="ContentTitle">
                Interest
            </div>
            <div class="ContentDetail">
                [ Competitive Programming ] <br>
                AtCoder Cyan <br>
                Codeforces Specialist (Highest : Expert) <br>
                [ DTM ] <br>
                Drum & Bass, House, Trance <br>
                Acoustic (Piano) <br>
                [ Web ] <br>
                Frontend - HTML, CSS, JavaScript (Framework : Vue.js) <br>
                Backend - Go <br>
                [ Graphics ] <br>
                Design (Figma) <br>
                Pixel Art <br>
            </div>
        </div>
    </div>
</template>

<style>
.Contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
.title {
    color: #D9A90E;
    font-family: "Inria Sans";
    font-size: 64px;
    font-style: normal;
    text-align: center;
    font-weight: 700;
}
.ContentTitle {
    color: #D9A90E;
    text-align: center;
    font-family: 'Inria Sans';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
}
.ContentDetail {
    color: #000;
    text-align: center;
    font-family: 'Inria Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}
.Detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
</style>