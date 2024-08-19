<template>
    <client-only>
        <Carousel :items-to-show="itemsQ" :wrap-around="true" :snapAlign="'start'">
            <Slide v-for="slide in data" :key="slide">
                <div class="carousel__item cursor-pointer" @click="handleClickPhoto(slide)">
                    <img :src="slide.download_url" alt="" />
                </div>
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </client-only>
</template>

<script>
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel/dist/carousel.es.js";
import "vue3-carousel/dist/carousel.css";

export default {
    props: {
        data: {
            type: Array,
            required: true,
        },
    },

    components: {
        Carousel,
        Navigation,
        Slide,
        Pagination,
    },
    data() {
        return {
            itemsQ: 3.5,
            settings: {
                snapAlign: "center",
            },
            // breakpoints are mobile first
            // any settings not specified will fallback to the carousel settings
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: "center",
                },
                // 1024 and up
                1024: {
                    itemsToShow: 5,
                    snapAlign: "start",
                },
            },
        };
    },
    methods: {
        handleClickPhoto(slide) {
            this.$emit("showPhoto", slide);
        },
        handleResize() {
            this.itemsQ = window.innerWidth < 768 ? 1 : 3.5;
        },
    },
    mounted() {
        this.itemsQ = window.innerWidth < 768 ? 1 : 3.5;
        window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
    },
};
</script>

<style scoped></style>
