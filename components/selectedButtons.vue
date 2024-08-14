<template>
    <div class="flex justify-center lg:justify-center items-center m-4 gap-4 py-6 px-0 md:px-12 lg:px-28">
        <button id="bandas" class="w-40 h-12" :class="{ selectedButton: selectedPortfolio === 'bandas' }" @click="handleSelected">Bandas y Artístas</button>
        <button id="eventos" class="w-40 h-12" :class="{ selectedButton: selectedPortfolio === 'eventos' }" @click="handleSelected">Eventos Sociales</button>
        <button id="arte" class="w-40 h-12" :class="{ selectedButton: selectedPortfolio === 'arte' }" @click="handleSelected">Retratos Artísticos</button>
    </div>
</template>

<script>
export default {
    props: {
        startWith: {
            type: String,
            default: "bandas",
        },
    },
    data() {
        return {
            selectedPortfolio: null,
        };
    },
    methods: {
        handleSelected(event) {
            this.selectedPortfolio = event.target.id;
            this.$emit("selected", event.target.id);
        },
    },
    beforeMount() {
        this.selectedPortfolio = this.startWith;
    },
};
</script>

<style scoped>
.selectedButton {
    @apply bg-danger text-white;
}
</style>
