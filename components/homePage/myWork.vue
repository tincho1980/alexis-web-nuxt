<template>
    <div class="mx-16 my-6">
        <customTitle title="Mi trabajo" :positionRight="true" />
        <div class="flex justify-center items-center">
            <div class="flex justify-around flex-wrap gap-10 py-10 px-28">
                <div class="h-96 w-96 overflow-hidden rounded-lg relative cursor-pointer" @click="goTo('bandas')">
                    <div class="absolute inset-0 bg-center dark:bg-black"></div>
                    <div class="group relative m-0 flex h-96 w-96 shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div class="z-10 h-full w-full overflow-hidden border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 rounded-lg">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/be-foodservice-logistcs.appspot.com/o/alexis-web%2F19%20Agosto%20-%20D%C3%ADa%20Inter%20Fotograf%C3%ADa%206.jpg?alt=media&token=bac2fc27-a6c7-40de-afc0-e25ea9058343"
                                class="animate-fade-in block h-full w-full scale-100 transform object-cover object-right-top opacity-100 transition duration-300 group-hover:scale-110"
                                alt=""
                            />
                        </div>
                        <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Bandas y Artístas</h1>
                        </div>
                    </div>
                </div>
                <div class="h-96 w-96 overflow-hidden rounded-lg relative cursor-pointer" @click="goTo('eventos')">
                    <div class="absolute inset-0 bg-center dark:bg-black rounded-lg"></div>
                    <div class="group relative m-0 flex h-96 w-96 shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div class="z-10 h-full w-full overflow-hidden border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 rounded-lg">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/be-foodservice-logistcs.appspot.com/o/alexis-web%2F15%20Agosto%20-%20D%C3%ADa%20Ni%C3%B1ez%204.jpg?alt=media&token=8473a9b5-4110-4ab7-9490-9b2469317970"
                                class="animate-fade-in block h-full w-full scale-100 transform object-cover object-right-top opacity-100 transition duration-300 group-hover:scale-110"
                                alt=""
                            />
                        </div>
                        <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Eventos Sociales</h1>
                        </div>
                    </div>
                </div>
                <div class="h-96 w-96 overflow-hidden rounded-lg relative cursor-pointer" @click="goTo('arte')">
                    <div class="absolute inset-0 bg-center dark:bg-black rounded-lg"></div>
                    <div class="group relative m-0 flex h-96 w-96 shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div class="z-10 h-full w-full overflow-hidden border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 rounded-lg">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/be-foodservice-logistcs.appspot.com/o/alexis-web%2F19%20Agosto%20-%20D%C3%ADa%20Inter%20Fotograf%C3%ADa%204.jpg?alt=media&token=547467bb-d959-414e-94be-71587886119c"
                                class="animate-fade-in block h-full w-full scale-100 transform object-cover object-right-top opacity-100 transition duration-300 group-hover:scale-110"
                                alt=""
                            />
                        </div>
                        <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">Retratos Artísticos</h1>
                        </div>
                    </div>
                </div>

                <!-- <div class="h-72 w-72 translate-x-6 overflow-hidden relative">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/be-foodservice-logistcs.appspot.com/o/alexis-web%2F19%20Agosto%20-%20D%C3%ADa%20Inter%20Fotograf%C3%ADa%206.jpg?alt=media&token=bac2fc27-a6c7-40de-afc0-e25ea9058343"
                        alt="foto"
                    />
                    <p class="absolute inset-x-0 bottom-0">Bandas y Artístas</p>
                </div> -->
                <!-- <div class="h-72 w-72 -translate-y-6 overflow-hidden">
                    <img src="https://firebasestorage.googleapis.com/v0/b/be-foodservice-logistcs.appspot.com/o/alexis-web%2F15%20Agosto%20-%20D%C3%ADa%20Ni%C3%B1ez%204.jpg?alt=media&token=8473a9b5-4110-4ab7-9490-9b2469317970" alt="foto" />
                </div>
                <div class="h-72 w-72 translate-y-6 overflow-hidden">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/be-foodservice-logistcs.appspot.com/o/alexis-web%2F19%20Agosto%20-%20D%C3%ADa%20Inter%20Fotograf%C3%ADa%204.jpg?alt=media&token=547467bb-d959-414e-94be-71587886119c"
                        alt="foto"
                    />
                </div>
                <div class="h-72 w-72 -translate-x-6 overflow-hidden">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/be-foodservice-logistcs.appspot.com/o/alexis-web%2F19%20Agosto%20-%20D%C3%ADa%20Inter%20Fotograf%C3%ADa%205.jpg?alt=media&token=5d012eac-4084-4583-a93b-205f0c31da26"
                        alt="foto"
                    />
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(portfolio) {
            console.log(portfolio);
            this.$router.push(`/portfolio?startWith=${portfolio}`);
        },
    },
};
</script>

<style></style>
