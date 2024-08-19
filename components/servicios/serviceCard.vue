<template>
    <div class="w-full md:w-1/2 lg:w-1/3 px-4">
        <div class="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
            <div class="w-full h-[70px] flex items-center justify-between px-4 bg-primary rounded-2xl mb-8">
                <img :src="() => require(data.imgUrl)" :alt="data.imgAlt" class="w-12" />
                <p class="w-full pl-4">{{ data.serviceTitle }}</p>
            </div>
            <p class="text-black" v-for="(service, i) in data.services" :key="i">{{ service }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style></style>
