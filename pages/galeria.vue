<template>
    <div class="mx-16 my-6">
        <ModalComponent :photoUrl="photoUrl" v-if="photoUrl" @click="closeModal()" />
        <customTitle title="Galería" />
        <SelectedButtons @selected="selectPortfolio" :startWith="startWith" />

        <div>
            <div class="mx-2 md:mx-16 border-b-2 my-4 pb-4" v-for="(event, i) of selectedEvents" :key="i">
                <h3 class="text-red-200">{{ event.title }}</h3>
                <p class="text-sm m-4">{{ event.description }}</p>
                <CarrouselComponent :data="event.fotos" @showPhoto="showPhoto" />

                <!-- <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 w-auto mx-auto space-y-3 p-6 bg-white">
                    <div class="break-inside-avoid" v-for="photo in selectedEvents" :key="photo.id">
                        <img class="h-auto rounded-lg" :src="photo.url" :alt="photo.name" @click="showPhoto(photo.url)" />
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import SelectedButtons from "@/components/selectedButtons.vue";
import ModalComponent from "@/components/modalComponent.vue";
import CarrouselComponent from "@/components/carrouselComponent.vue";

import galerias from "@/helpers/galerias.json";

export default {
    components: {
        SelectedButtons,
        ModalComponent,
        CarrouselComponent,
    },
    data() {
        return {
            selectedEvents: null,
            events: galerias.bandas[1].fotos,
            photoUrl: null,
            startWith: "bandas",
        };
    },
    methods: {
        selectPortfolio(type) {
            this.selectedEvents = galerias[type];
        },
        showPhoto(slide) {
            this.photoUrl = slide.download_url;
        },
        closeModal() {
            this.photoUrl = null;
        },
    },
    beforeMount() {
        const startWith = this.$route.query.startWith;
        if (startWith) {
            this.startWith = startWith;
            this.selectPortfolio(startWith);
        } else {
            this.startWith = "bandas";
            this.selectPortfolio("bandas");
        }
    },
};
</script>

<style scoped></style>
