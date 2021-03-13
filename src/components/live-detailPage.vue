<template>
    <div class="video-flv">
        <div class="video-box">
            <video
                id="videoElement"
                class="videoElement"
                controls
                autoplay
                ref="videoElement"
            >
                Your browser is too old which doesn't support HTML5 video.
            </video>
        </div>
        <div class="video-control"></div>
    </div>
</template>
<script>
import flvjs from "flv.js/dist/flv.min.js";
export default {
    name: "live-detail",
    data() {
        return {
            src: "./sintel.flv", //flv格式的地址
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.createVideo();
        });
    },
    methods: {
        createVideo() {
            if (flvjs.isSupported()) {
                var videoElement = document.getElementById("videoElement");
                var flvPlayer = flvjs.createPlayer({
                    type: "flv",
                    url: this.src,
                });
                flvPlayer.attachMediaElement(videoElement);
                flvPlayer.load();
                flvPlayer.play();
            }
        },
    },
};
</script>
<style scoped>
.input-field {
    position: fixed;
    bottom: 1rem;
    padding: 0.5rem;
    display: flex;
    height: 1rem;
    justify-content: center;
}
.input-field input {
    font-size: 0.5rem;
    display: inline-block;
    width: 50%;
}
/*  */
</style>
