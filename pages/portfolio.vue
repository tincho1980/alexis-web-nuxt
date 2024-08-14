<template>
    <div class="mx-16 my-6">
        <ModalComponent :photoUrl="photoUrl" v-if="photoUrl" @click="closeModal()" />
        <customTitle title="Portfolio" />
        <SelectedButtons @selected="selectPortfolio" :startWith="startWith" />
        <div class="flex flex-col gap-4 mb-6 px-0 md:px-12 lg:px-28">
            <h2 class="italic quote text-center">" POSTALES DEL ROCK... CON EL FOCO EN EL UNDER "</h2>
            <p>¿Qué es para mí la Fotografía de Bandas?</p>
            <p>Es un hermoso complemento entre dos géneros del arte que me apasionan: la música y la fotografía.</p>
            <p>No es un hobbie, ni un pasatiempo vulgar. Es una profesión, y sobre todo una búsqueda artística.</p>
            <p>No se trata de hacer disparos improvisados a mansalva. Sino de conectar con la energía de la banda en pleno despliegue, de captar su esencia individual y grupal, y lograr las tomas que mejor la caractericen.</p>
            <p>
                No es una documentación estándar de un evento pasajero, ni su objetivo se reduce a la difusión efímera en redes sociales. Se trata de crear retratos artísticos en medio de la espontaneidad de tu show. De lograr verdaderas postales de
                Rock. De construir y fortalecer la identidad visual de tu proyecto, dándole una apariencia homogénea, profesional y atractiva.
            </p>
            <p>Pero sobre todo, se trata de que tu arte trascienda en el tiempo a través de mi arte.</p>
            <h2 class="italic quote text-center">" CUALIFICÁ TU ARTE... CON EL OJO DE UN ARTISTA "</h2>
        </div>
        <div class="mx-2 md:mx-16">
            <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 w-auto mx-auto space-y-3 p-6 bg-white">
                <div class="break-inside-avoid" v-for="photo in selectedPortfolio" :key="photo.id">
                    <img class="h-auto rounded-lg" :src="photo.url" :alt="photo.name" @click="showPhoto(photo.url)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SelectedButtons from "@/components/selectedButtons.vue";
import ModalComponent from "@/components/modalComponent.vue";

import portfolios from "@/helpers/portfolios.json";

export default {
    components: {
        SelectedButtons,
        ModalComponent,
    },
    data() {
        return {
            selectedPortfolio: null,
            photoUrl: null,
            startWith: "bandas",
        };
    },
    methods: {
        selectPortfolio(id) {
            this.selectedPortfolio = portfolios[id];
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
