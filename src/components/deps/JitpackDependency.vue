<template>
    <div>
        To add the dependencies, first you need to add the <a href="https://jitpack.io">https://jitpack.io</a> repository:
        <Prism language="xml" :code="code"></Prism>
    </div>
</template>
<script>
    import 'prismjs/components/prism-protobuf'
    import 'prismjs/components/prism-kotlin'
    import Prism from 'vue-prism-component'
    export default {
        data() {
            return {
                code:
`<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>`,
            };
        },
        components: {
            Prism
        },
    };
</script>
