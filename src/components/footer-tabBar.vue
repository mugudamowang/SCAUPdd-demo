<template>
    <footer class="footer">
        <van-tabbar active-color="green" v-model="bar_active">
            <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/live" icon="video-o">直播</van-tabbar-item>
            <van-tabbar-item to="/catalog" icon="more-o">分类</van-tabbar-item>
            <van-tabbar-item to="/talk" badge="5" icon="comment-o">聊天</van-tabbar-item>
            <!-- <van-tabbar-item to="/my" dot icon="manager-o">我的</van-tabbar-item> -->
            <van-tabbar-item @click="isLogin" icon="manager-o">我的</van-tabbar-item>
            
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
    methods: {
        isLogin(){
            let userOnlogin = localStorage.getItem("userOnlogin")
            if(userOnlogin==null){
                        this.$router.push({ path: "/login" });
            }else{
                this.$router.push({ path: "/my" });
            }
        }
    }
};
</script>

<style>
</style>