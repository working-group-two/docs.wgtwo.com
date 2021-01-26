<template>
    <div>
        <Prism language="xml" :code="`<dependencies>\n${clients.map(it => '    ' + dependencies[it]).join('\n')}\n</depenencies>`"></Prism>
    </div>
</template>
<script>
    import 'prismjs/components/prism-protobuf'
    import 'prismjs/components/prism-kotlin'
    import Prism from 'vue-prism-component'

    let apiVersion = "cca7093"; // UPDATE THIS WHEN YOU RELEASE A NEW VERSION (!)

    export default {
        data() {
            return {
                dependencies: {
                    "messaging-grpc": `
                        <dependency>
                            <groupId>com.github.working-group-two.wgtwoapis</groupId>
                            <artifactId>messaging-grpc</artifactId>
                            <version>${apiVersion}</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                    "event-grpc": `
                        <dependency>
                            <groupId>com.github.working-group-two.wgtwoapis</groupId>
                            <artifactId>event-grpc</artifactId>
                            <version>${apiVersion}</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                    "sms-grpc": `
                        <dependency>
                            <groupId>com.github.working-group-two.wgtwoapis</groupId>
                            <artifactId>sms-grpc</artifactId>
                            <version>${apiVersion}</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                    "rest": `
                        <dependency>
                            <groupId>com.github.working-group-two.wgtwoapis</groupId>
                            <artifactId>rest</artifactId>
                            <version>${apiVersion}</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                    "voicemail-grpc": `
                        <dependency>
                            <groupId>com.github.working-group-two.wgtwoapis</groupId>
                            <artifactId>voicemail-grpc</artifactId>
                            <version>${apiVersion}</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                    "auth-grpc": `
                        <dependency>
                            <groupId>com.github.working-group-two.wgtwoapis</groupId>
                            <artifactId>auth-grpc</artifactId>
                            <version>${apiVersion}</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                    "utils-grpc": `
                        <dependency>
                            <groupId>com.github.working-group-two.wgtwoapis</groupId>
                            <artifactId>utils-grpc</artifactId>
                            <version>${apiVersion}</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                    "phonenumber-utils": `
                        <dependency>
                            <groupId>com.github.working-group-two.wgtwoapis</groupId>
                            <artifactId>phonenumber-utils</artifactId>
                            <version>${apiVersion}</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                    "protobuf-java-util": `
                        <dependency>
                            <groupId>com.google.protobuf</groupId>
                            <artifactId>protobuf-java-util</artifactId>
                            <version>3.11.4</version>
                        </dependency>`.trim().replace(/^                /gm, ""),
                }
            };
        },
        components: {
            Prism
        },
        props: ["clients"],
    };
</script>
