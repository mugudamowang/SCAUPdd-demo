<template>
    <div>
        <header>
            <p style="font-size: 0.3rem; font-weight: bold; padding: 0.2rem">
                消息中心
            </p>
        </header>
        <main>
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <div v-for="item in storename" :key="item" :title="item">
                        <router-link to="/talk-detail">
                            <van-image
                                id="avatar"
                                round
                                fit="cover"
                                width="0.8rem"
                                height="0.8rem"
                                src="https://img.yzcdn.cn/vant/cat.jpeg"
                            />
                            <label for="avatar">{{ item }}</label>
                        </router-link>
                    </div>
                </van-list>
            </van-pull-refresh>
        </main>
        <footer>
            <footer_tabBar :active="3"></footer_tabBar>
        </footer>
    </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";
export default {
    name: "talk-index",
    data() {
        return {
            storename: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    methods: {
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 10) {
                    this.finished = true;
                }
            }, 1000);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
    },
    components: { footer_tabBar },
};
</script>

<style scoped>
</style>