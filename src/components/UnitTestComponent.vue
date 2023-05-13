<template>Unit {{ props.msg }}</template>

<script setup lang="ts">
const props = defineProps<{ msg: string }>();
</script>

<style scoped lang="scss">
@import "@/assets/scss/modules";
</style>
