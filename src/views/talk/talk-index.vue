<template>
    <div>
        <header>talk</header>
        <main></main>
        <footer>
            <footer_tabBar :active=3></footer_tabBar>
        </footer>
    </div>
</template>

<script>
import footer_tabBar from '../../components/footer-tabBar'
export default {
    name: "talk-index",
    data() {
        return {
        };
    },
    components:{footer_tabBar}
};
</script>

<style scoped>
</style>