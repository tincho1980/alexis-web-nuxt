<template>
    <div class="fixed inset-0 h-full w-full z-50 bg-opacity-50 bg-black flex justify-center items-center">
        <img :src="photoUrl" alt="foto" class="max-h-[80%] max-w[80%] bg-white p-4" />
    </div>
</template>

<script>
export default {
    props: {
        photoUrl: {
            type: String,
            default: null,
        },
    },
};
</script>

<style></style>
