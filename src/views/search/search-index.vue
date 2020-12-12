<template>
    <div>
        <div class="search-bar">
            <van-icon @click="onBackward" id="goback" name="arrow-left" />
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
            >
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "search",
    data() {
        return {
            value: "",
            productlist: [],
        };
    },
    methods: {
        onSearch() {
            axios
                .get("http://localhost:3000/api1", {
                    params: {
                        pattern: this.value,    //传参
                    },
                })
                .then((res) => {
                    alert(res.data.key1);
                });
        },
        onBackward() {
            //编程式导航
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.search-bar {
    display: flex;
    align-items: center;
}
.search-bar > #goback {
    font-size: 0.5rem;
}
.search-bar .van-search {
    flex: 2;
    padding-left: 0;
}
</style>