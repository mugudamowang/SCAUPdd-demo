<template>
    <div>
        <van-nav-bar
            :title="value"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>
<script>
export default {
    name: "header-titleBar",
    props:{
        title: String
    },
    data() {
        return {
            value: this.title
        };
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
    },
};
</script>
<style scoped>

</style>