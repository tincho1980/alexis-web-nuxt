<template>
    <section class="mx-16 my-6">
        <customTitle title="Contactame" :positionRight="true" />
        <div class="flex justify-center items-center">
            <div class="flex flex-col lg:flex-row justify-around gap-20 py-10 md:px-28 w-full">
                <div class="lg:w-4/6 lg:pe-12 lg:border-e-2">
                    <h3 class="mb-6">Escribime un email</h3>
                    <form id="contactForm" class="flex flex-col items-stretch gap-8" @submit.prevent="sendEmail">
                        <input type="text" v-model="form.name" :placeholder="placeholder.name" class="px-6" />
                        <input type="email" v-model="form.email" :placeholder="placeholder.email" class="px-6" />
                        <textarea cols="30" rows="6" v-model="form.message" :placeholder="placeholder.message" class="px-6"></textarea>
                        <div class="flex justify-center">
                            <button class="btn-light text font-bold" type="submit">Enviar email</button>
                        </div>
                    </form>
                </div>
                <div class="lg:w-2/6 flex flex-col m-auto">
                    <div class="border-2 h-40 w-60 md:w-80 flex flex-col p-4">
                        <img src="@/assets/img/logo_blanco.png" alt="Alexis Salerno" class="w-40 mb-4" />
                        <p class="text-right text-sm md:text-lg">alexisSalerno@email.com</p>
                        <p class="text-right text-sm md:text-lg">011-5555-1555</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
            },
            placeholder: {
                name: "Tu nombre*",
                email: "Tu email*",
                message: "En que puedo ayudarte?*",
            },
        };
    },
    methods: {
        async sendEmail() {
            try {
                const response = await fetch("/api/send-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...this.form }),
                });

                console.log(response.ok);

                if (response.ok) {
                    alert("Email enviado con éxito, en breve me pondré en contacto.");
                    this.form = {
                        name: "",
                        email: "",
                        message: "",
                    };
                } else {
                    alert("Error al enviar el email, vuelva a intentarlo más tarde.");
                }
            } catch (error) {
                alert("Error al enviar el email, vuelva a intentarlo más tarde.");
            }
        },
    },
};
</script>

<style></style>
