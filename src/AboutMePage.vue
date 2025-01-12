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
            <a href="/comingsoon" class="ButtonLink">
                <div class="ToWorksButton">
                    <p>詳細は, Works をご覧ください</p>
                </div>
            </a>
            <div class="ContentDetail">
                Competitive Programming <br>
                DTM <br>
                Web Development <br>
                Graphics <br>
            </div>
        </div>
    </div>
</template>

<style>
.ButtonLink {
    color: #000;
}
.ToWorksButton {
    padding: 0 20px;
    display: flex;
    height: auto;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    border-radius: 10px;
    border: 1px solid #D9A90E;
    background: white;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
}
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
    line-height: 100%;
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