<template>
    <div class="mx-16 my-6">
        <ModalComponent :photoUrl="photoUrl" v-if="photoUrl" @click="closeModal()" />
        <customTitle title="Galería" />
        <SelectedButtons @selected="selectPortfolio" :startWith="startWith" />

        <div class="mx-2 md:mx-16">
            <CarrouselComponent :data="photos" />

            <!-- <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 w-auto mx-auto space-y-3 p-6 bg-white">
                <div class="break-inside-avoid" v-for="photo in selectedPortfolio" :key="photo.id">
                    <img class="h-auto rounded-lg" :src="photo.url" :alt="photo.name" @click="showPhoto(photo.url)" />
                </div>
            </div> -->
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
            selectedPortfolio: null,
            photos: galerias.bandas[1].fotos,
            startWith: "bandas",
        };
    },
    methods: {
        selectPortfolio(id) {
            this.selectedPortfolio = galerias[id];
        },
        showPhoto(url) {
            this.photoUrl = url;
        },
        closeModal() {
            this.photoUrl = null;
        },
    },
    beforeMount() {
        if (this.$route.query.startWith) {
            this.startWith = this.$route.query.startWith;
        }
        this.selectPortfolio(this.startWith);
    },
};
</script>

<style scoped></style>
