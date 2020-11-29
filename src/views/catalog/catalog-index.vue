<template>
    <div>
        <header>
            <router-link to="/search">
            <van-search
                style="height: 100%"
                input-align="center"
                v-model="value"
                @click="goSearch"
                disabled
                placeholder="商品搜索"
            />
            </router-link>
        </header>
        <main>
            <van-tree-select
                height="100vh"
                :items="items"
                :main-active-index.sync="active"
            >
                <template #content>
                    <div v-if="active === 0">
                        <van-image
                            v-for="index in 10"
                            :key="index"
                            src="https://img.yzcdn.cn/vant/apple-4.jpg"
                        />
                    </div>
                    <div v-if="active === 1">
                        <van-image
                            v-for="index in 10"
                            :key="index"
                            src="https://img.yzcdn.cn/vant/apple-2.jpg"
                        />
                    </div>
                    <div v-if="active === 2">
                        <van-image
                            v-for="index in 10"
                            :key="index"
                            src="https://img.yzcdn.cn/vant/apple-3.jpg"
                        />
                    </div>
                </template>
            </van-tree-select>
        </main>
        <footer>
            <footer_tabBar :active="2"></footer_tabBar>
        </footer>
    </div>
</template>

<script>
import footer_tabBar from "../../components/footer-tabBar";
export default {
    name: "catalog-index",
    data() {
        return {
            value: "",
            active: 0,
            items: [{ text: "分组 1" }, { text: "分组 2" }, { text: "分组 3" }],
        };
    },
    methods: {
        goSearch() {
            console.log("goSearch!");
        },
    },
    components: { footer_tabBar },
};
</script>

<style scoped>
main {
    box-sizing: border-box;
    position: fixed;
    width: 100%;
}
</style>