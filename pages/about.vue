<template>
    <div class="mx-16 my-6">
        <customTitle title="Quien soy" />
        <div class="flex flex-col justify-center lg:justify-around items-center m-4 gap-10 pb-10 px-0 md:px-12 lg:px-28">
            <div class="flex flex-col lg:flex-row justify-center items-center gap-10">
                <img src="@/assets/img/quien_soy.jpg" alt="Alexis Salerno" class="w-60 h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover object-right max-w-none" />
                <div class="flex flex-col gap-10">
                    <p>Mi nombre es Alexis Salerno.</p>
                    <p>
                        Antes que nada soy Artista. Y como tal, un experto en comunicación.Me defino como un contador de historias profesional y creador de contenido de alto impacto visual, que se vale para ello de la fuerza de la imagen fotográfica
                        y audiovisual.
                    </p>
                    <p>
                        La luz y la sombra. El círculo cromático. La composición escenográfica. El mensaje literal y la metáfora. La complementariedad entre la imagen planificada y la espontaneidad de los hechos. Y también la intromisión la
                        contingencia “antiestética” como otra de las partes de un todo que acontece en simultáneo, son mis principales aliados en el impredecible y atrapante camino de la creación artística, en el que la cámara es sólo una herramienta
                        pero nunca la protagonista. La protagonista siempre es y será tu idea, y yo tu mejor colaborador.
                    </p>
                </div>
            </div>
            <div class="flex justify-center flex-col items-center gap-10">
                <p>
                    Técnicamente soy director creativo, fotógrafo profesional y filmmaker. Me especializo en fotografía de Bandas y Artistas, en fotografía Boudoir y en fotografía de Retrato. También hago coberturas de Eventos Sociales y Comerciales,
                    y fotografía de Productos.
                </p>
                <p>
                    Mi mayor virtud y mi aporte de valor para tus proyectos son el compromiso y la preparación profesional para llevar tu idea inicial siempre a un nivel superior. Lo distintivo de mi propuesta es que no se trata sólo de capturar las
                    tomas más representativas de tu mejor versión. También te ofrezco una experiencia confiable, enriquecedora y además divertida, de la cual las fotografías son el desenlace y el producto final perfecto.
                </p>
                <p>La experiencia fotográfica de tus sueños no solamente es posible. Si la dejas en mis manos puede superar ampliamente tus expectativas. Deseo fuertemente que me des ese privilegio.</p>
                <h2 class="italic quote text-center">" CUALIFICÁ TU ARTE… CON EL OJO DE UN ARTISTA "</h2>
            </div>
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
    <contactMe />
</template>

<script>
import contactMe from "@/components/homePage/contactMe.vue";

export default {
    components: {
        contactMe,
    },
    data() {
        return {
            windowsSize: null,
        };
    },
    methods: {
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

<style scoped>
.quote {
    text-shadow: 3px 3px 3px rgba(255, 255, 255, 0.5);
}
</style>
