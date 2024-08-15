<template>
    <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="slide in data" :key="slide">
            <div class="carousel__item">
                <img :src="slide.download_url" alt="" />
            </div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
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
    },
    data() {
        return {
            settings: {
                itemsToShow: 1,
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
};
</script>

<style scoped>
.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
</style>
