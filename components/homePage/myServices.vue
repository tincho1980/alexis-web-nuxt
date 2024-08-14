<template>
    <section class="mx-16 my-6">
        <customTitle title="Mis Servicios" />
        <div class="flex justify-center items-center">
            <div class="flex justify-around gap-10 md:gap-20 py-20 px-28 md:px-56 flex-wrap">
                <div class="btn rounded-lg flex gap-4 items-center !w-64" @click="handleClick">
                    <img src="@/assets/icons/guitar.svg" alt="guitarra" class="w-12" />
                    <p class="w-40">Para Bandas y Artístas</p>
                </div>
                <div class="btn rounded-lg flex gap-4 items-center !w-64" @click="handleClick">
                    <img src="@/assets/icons/wedding.svg" alt="novixs" class="w-12" />
                    <p class="w-40">Para Novixs</p>
                </div>
                <div class="btn rounded-lg flex gap-4 items-center !w-64" @click="handleClick">
                    <img src="@/assets/icons/fairytale.svg" alt="quinceañerxs" class="w-12" />
                    <p class="w-40">Para Quinceañerxs</p>
                </div>
                <div class="btn rounded-lg flex gap-4 items-center !w-64" @click="handleClick">
                    <img src="@/assets/icons/photographer.svg" alt="modelexs" class="w-12" />
                    <p class="w-40">Para Modelexs</p>
                </div>
                <div class="btn rounded-lg flex gap-4 items-center !w-64" @click="handleClick">
                    <img src="@/assets/icons/mortarboard.svg" alt="egresadxs" class="w-12" />
                    <p class="w-40">Para Egresadxs</p>
                </div>
                <div class="btn rounded-lg flex gap-4 items-center !w-64" @click="handleClick">
                    <img src="@/assets/icons/tshirt.svg" alt="estampado" class="w-12" />
                    <p class="w-40">Estampado</p>
                </div>
                <div class="btn rounded-lg flex gap-4 items-center !w-64" @click="handleClick">
                    <img src="@/assets/icons/print.svg" alt="guitarra" class="w-12" />
                    <p class="w-40">Impresiones</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$router.push("/servicios");
        },
    },
};
</script>

<style></style>
