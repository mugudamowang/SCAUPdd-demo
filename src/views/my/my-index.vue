<template>
    <div>
        <header>my</header>
        <main></main>
        <footer>
            <footer_tabBar :active=4></footer_tabBar>
        </footer>
    </div>
</template>

<script>
import footer_tabBar from '../../components/footer-tabBar'
export default {
    name: "my-index",
    data() {
        return {
        };
    },
    components:{footer_tabBar}
};
</script>

<style scoped>
</style>