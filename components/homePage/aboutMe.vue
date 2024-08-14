<template>
    <div class="mx-16 my-6">
        <customTitle title="Quien soy" />
        <div class="flex flex-col lg:flex-row justify-center lg:justify-around items-center m-4 gap-10 pb-10 px-0 md:px-12 lg:px-28">
            <div class="flex justify-center flex-col items-center gap-10">
                <p>Mi nombre es Alexis Salerno.</p>
                <p>
                    Antes que nada soy Artista. Y como tal, un experto en comunicación. Me defino como un contador de historias profesional y creador de contenido de alto impacto visual, que se vale para ello de la fuerza de la imagen fotográfica y
                    audiovisual.
                </p>
                <p>
                    Mi mayor virtud y mi aporte de valor para tus proyectos son el compromiso y la preparación profesional para llevar tu idea inicial siempre a un nivel superior. Lo distintivo de mi propuesta es que no se trata sólo de capturar las
                    tomas más representativas de tu mejor versión. También te ofrezco una experiencia confiable, enriquecedora y además divertida, de la cual las imágenes son el desenlace y el producto final perfecto.
                </p>
                <p>La experiencia fotográfica y audiovisual de tus sueños no solamente es posible. Si la dejas en mis manos puede superar ampliamente tus expectativas. Deseo fuertemente que me des ese privilegio.</p>
                <button class="btn" @click="handleClick">Conóceme</button>
            </div>
            <img src="@/assets/img/quien_soy.jpg" alt="Alexis Salerno" class="w-60 h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover object-right max-w-none" />
        </div>
        <div v-if="windowsSize < 1000" class="-mx-9">
            <!-- LightWidget WIDGET -->
            <iframe src="//lightwidget.com/widgets/9d6bf96b10b250e2b3472007005574f1.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden"></iframe>
        </div>
        <div v-else>
            <!-- LightWidget WIDGET -->
            <iframe src="//lightwidget.com/widgets/478d76cf06525694ad8eb2e822fdadfb.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            windowsSize: null,
        };
    },
    methods: {
        handleClick() {
            this.$router.push("/about");
        },
        handleResize() {
            this.windowsSize = window.innerWidth;
            location.reload();
        },
    },
    mounted() {
        this.windowsSize = window.innerWidth;
        window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
    },
};
</script>

<style></style>
