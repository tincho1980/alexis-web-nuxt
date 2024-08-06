<template>
    <div class="overflow-x-hidden">
        <hero />
        <aboutMe />
        <myWork />
        <myServices />
        <contactMe />
    </div>
</template>

<script>
import hero from "@/components/homePage/hero.vue";
import aboutMe from "@/components/homePage/aboutMe.vue";
import myWork from "@/components/homePage/myWork.vue";
import myServices from "@/components/homePage/myServices.vue";
import contactMe from "@/components/homePage/contactMe.vue";

export default {
    components: {
        hero,
        aboutMe,
        myWork,
        myServices,
        contactMe,
    },
};
</script>

<style scoped>
.hero {
    background-image: url("/assets/img/hero.jpg");
    background-size: cover;
    background-position: center;
    height: calc(100vh - 80px);
}
</style>
