<template>
    <div :class="page === '/contacto' ? '' : 'h-screen'">
        <header class="fixed top-0 w-full bg-black z-50">
            <nav class="hidden md:block">
                <ul class="flex justify-evenly align-middle gap-4">
                    <li class="flex align-middle"><NuxtLink to="/" class="my-auto px-4">Home</NuxtLink></li>
                    <li class="flex align-middle"><NuxtLink to="/about" class="my-auto px-4">Sobre mí</NuxtLink></li>
                    <li class="flex align-middle"><NuxtLink to="/portfolio" class="my-auto px-4">Portfolio</NuxtLink></li>
                    <li class="flex align-middle">
                        <NuxtLink to="/" class="my-auto logo"><img src="@/assets/img/logo_blanco.png" alt="Alexis Salerno" class="py-1" /></NuxtLink>
                    </li>
                    <li class="flex align-middle"><NuxtLink to="/galeria" class="my-auto px-4">Galería</NuxtLink></li>
                    <li class="flex align-middle"><NuxtLink to="/servicios" class="my-auto px-4">Servicios</NuxtLink></li>
                    <li class="flex align-middle"><NuxtLink to="/contacto" class="my-auto px-4">Contacto</NuxtLink></li>
                </ul>
            </nav>
            <nav class="flex justify-between md:hidden">
                <div class="absolute -left-[0px] top-[50px] bg-black h-screen pt-8 transform transition-all duration-300 origin-left" :class="{ '-translate-x-40': !menuOpen, block: menuOpen }">
                    <ul class="flex flex-col justify-start align-top">
                        <li class="h-12 w-36"><NuxtLink to="/" class="block h-12 w-36 text-start py-2 px-4" @click="toggleMenu">Home</NuxtLink></li>
                        <li class="h-12 w-36"><NuxtLink to="/about" class="block h-12 w-36 text-start py-2 px-4" @click="toggleMenu">Sobre mí</NuxtLink></li>
                        <li class="h-12 w-36"><NuxtLink to="/portfolio" class="block h-12 w-36 text-start py-2 px-4" @click="toggleMenu">Portfolio</NuxtLink></li>
                        <li class="h-12 w-36"><NuxtLink to="/galeria" class="block h-12 w-36 text-start py-2 px-4" @click="toggleMenu">Galería</NuxtLink></li>
                        <li class="h-12 w-36"><NuxtLink to="/servicios" class="block h-12 w-36 text-start py-2 px-4" @click="toggleMenu">Servicios</NuxtLink></li>
                        <li class="h-12 w-36"><NuxtLink to="/contacto" class="block h-12 w-36 text-start py-2 px-4" @click="toggleMenu">Contacto</NuxtLink></li>
                    </ul>
                    <div class="flex flex-col">
                        <img id="instagram" src="@/assets/icons/instagram.svg" alt="instagram" class="p-2 w-12 cursor-pointer" @click="handelGoTo" />
                        <img id="facebook" src="@/assets/icons/facebook.svg" alt="facebook" class="p-2 w-12 cursor-pointer" @click="handelGoTo" />
                        <img id="whatsapp" src="@/assets/icons/whatsapp.svg" alt="whatsapp" class="p-2 w-12 cursor-pointer" @click="handelGoTo" />
                    </div>
                </div>
                <div>
                    <button class="relative group" @click="toggleMenu">
                        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black duration-200 shadow-md">
                            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left" :class="{ 'rotate-[42deg]': menuOpen }"></div>
                                <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300" :class="{ '-translate-x-10': menuOpen }"></div>
                                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left" :class="{ '-rotate-[42deg]': menuOpen }"></div>
                            </div>
                        </div>
                    </button>
                </div>
                <NuxtLink to="/" class="my-auto logo"><img src="@/assets/img/logo_blanco.png" alt="Alexis Salerno" class="p-2 w-24" /></NuxtLink>
            </nav>
        </header>
        <div class="fixed bottom-2 right-2 hidden md:block">
            <img id="instagram" src="@/assets/icons/instagram.svg" alt="instagram" class="p-2 w-16 cursor-pointer" @click="handelGoTo" />
            <img id="facebook" src="@/assets/icons/facebook.svg" alt="facebook" class="p-2 w-16 cursor-pointer" @click="handelGoTo" />
            <img id="whatsapp" src="@/assets/icons/whatsapp.svg" alt="whatsapp" class="p-2 w-16 cursor-pointer" @click="handelGoTo" />
        </div>

        <!-- Page content -->
        <div :class="page === '/contacto' ? 'mt-20' : 'mt-[50px] md:mt-20'">
            <slot />
        </div>

        <footer class="h-8 w-auto bg-secondary flex justify-center align-middle">
            <cuote class="my-auto">&copy Martunito Software</cuote>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
    computed: {
        page() {
            return this.$route.path;
        },
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        handelGoTo(event) {
            if (event.target.id === "instagram") {
                window.open("https://www.instagram.com");
                this.toggleMenu();
            } else if (event.target.id === "facebook") {
                window.open("https://www.facebook.com");
                this.toggleMenu();
            } else if (event.target.id === "whatsapp") {
                window.open("https://wa.me/5492216387605");
                this.toggleMenu();
            }
        },
    },
};
</script>

<style scoped>
.router-link-exact-active:not(.logo) {
    @apply bg-danger text-white py-2 px-4 rounded;
}
@media (max-width: 768px) {
    .router-link-exact-active:not(.logo) {
        @apply bg-danger text-white block;
    }
}
</style>
