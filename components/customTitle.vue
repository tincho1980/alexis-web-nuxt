<template>
    <div class="flex align-middle" :class="positionRight ? '-mr-16 pr-10 TitleRight justify-end' : '-ml-16 pl-10 titleLeft'">
        <h1 class="my-auto" :class="positionRight ? 'text-right' : 'text-left'">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        positionRight: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style scoped>
.titleLeft {
    height: 76px;
    background: rgb(99, 1, 2);
    background: linear-gradient(90deg, rgba(99, 1, 2, 1) 50%, rgba(99, 1, 2, 0.7) 70%, rgba(99, 1, 2, 0) 84%);
}

.TitleRight {
    height: 76px;
    background: rgb(99, 1, 2);
    background: linear-gradient(90deg, rgba(99, 1, 2, 0) 15%, rgba(99, 1, 2, 0.7) 30%, rgba(99, 1, 2, 1) 50%);
}
</style>
