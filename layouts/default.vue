<template>
    <div class="h-screen">
        <header class="fixed top-0 w-full bg-black z-50">
            <nav class="">
                <ul class="flex justify-evenly align-middle gap-4">
                    <li class="flex align-middle"><NuxtLink to="/" class="my-auto px-4">Home</NuxtLink></li>
                    <li class="flex align-middle"><NuxtLink to="/about" class="my-auto px-4">Sobre mí</NuxtLink></li>
                    <li class="flex align-middle"><NuxtLink to="/porfolio" class="my-auto px-4">Portfolio</NuxtLink></li>
                    <li class="flex align-middle">
                        <NuxtLink to="/" class="my-auto logo"><img src="@/assets/img/logo_blanco.png" alt="Alexis Salerno" class="py-1" /></NuxtLink>
                    </li>
                    <li class="flex align-middle"><NuxtLink to="/galeria" class="my-auto px-4">Galería</NuxtLink></li>
                    <li class="flex align-middle"><NuxtLink to="/servicios" class="my-auto px-4">Servicios</NuxtLink></li>
                    <li class="flex align-middle"><NuxtLink to="/contacto" class="my-auto px-4">Constacto</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- Page content -->
        <div class="mt-20">
            <slot />
        </div>

        <footer class="h-8 w-auto bg-secondary flex justify-center align-middle">
            <cuote class="my-auto">&copy Martunito Software</cuote>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-exact-active:not(.logo) {
    @apply bg-danger text-white py-2 px-4 rounded;
}
</style>
