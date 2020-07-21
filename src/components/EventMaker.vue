<template>
    <h1>Hello from EventMaker</h1>
</template>
<script>
export default {
    mounted() {
        return
        setInterval(() => {
            this.$emit("codefetched");
        }, 100);
    }
}
</script>
