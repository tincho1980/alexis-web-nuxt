<template>
    <div class="overflow-x-hidden">
        <contactMe />
    </div>
</template>

<script>
import contactMe from "@/components/homePage/contactMe.vue";

export default {
    components: {
        contactMe,
    },
};
</script>

<style scoped>
.screen {
    height: calc(100vh - 80px);
}
</style>
