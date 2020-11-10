<template>
    <footer class="footer">
        <van-tabbar v-model="bar_active">
            <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/live" icon="video-o">直播</van-tabbar-item>
            <van-tabbar-item to="/catalog" icon="more-o">分类</van-tabbar-item>
            <van-tabbar-item to="/talk" badge="5" icon="comment-o">聊天</van-tabbar-item>
            <van-tabbar-item to="/my" dot icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
    </footer>
</template>

<script>
export default {
    props: {
        active: Number,
    },
    name: "footer-tabBar",
    data() {
        return {
            bar_active: this.active,
        };
    },
    
};
</script>

<style>
</style>