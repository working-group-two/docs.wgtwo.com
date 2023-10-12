<template>
  <div>
    <Prism language="xml" :code="`<dependencies>\n${clients.map(it => '    ' + dependencies[it]).join('\n')}\n</depenencies>`"></Prism>
  </div>
</template>
<script>
import "prismjs/components/prism-kotlin";
import Prism from "vue-prism-component";

let apiVersion = "cca7093"; // UPDATE THIS WHEN YOU RELEASE A NEW VERSION (!)

let authVersion = "0.0.5"; // UPDATE THIS WHEN YOU RELEASE A NEW VERSION (!)
let v0Version = "0.1.6"; // UPDATE THIS WHEN YOU RELEASE A NEW VERSION (!)

export default {
  components: {
    Prism
  },
  props: ["clients"],
  data() {
    return {
      dependencies: {
        "auth":
            `
              <dependency>
                  <groupId>com.wgtwo.api</groupId>
                  <artifactId>auth</artifactId>
                  <version>${authVersion}</version>
              </dependency>`.trim().replace(/^ {10}/gm, ""),
        "auth-grpc": `
              <dependency>
                  <groupId>com.wgtwo.api</groupId>
                  <artifactId>auth</artifactId>
                  <version>${authVersion}</version>
              </dependency>`.trim().replace(/^ {10}/gm, ""),
        "lookup":
            `
              <dependency>
                  <groupId>com.wgtwo.api.v0.grpc</groupId>
                  <artifactId>lookup</artifactId>
                  <version>${v0Version}</version>
              </dependency>`.trim().replace(/^ {10}/gm, ""),
        "event-grpc": `
           <dependency>
                <groupId>com.wgtwo.api.v0.grpc</groupId>
                <artifactId>events</artifactId>
                <version>${v0Version}</version>
            </dependency>`.trim().replace(/^ {10}/gm, ""),
        "sms-grpc":
            `
              <dependency>
                  <groupId>com.wgtwo.api.v0.grpc</groupId>
                  <artifactId>sms</artifactId>
                  <version>${v0Version}</version>
              </dependency>`.trim().replace(/^ {10}/gm, ""),
        "voicemail-grpc": `
              <dependency>
                  <groupId>com.wgtwo.api.v0.grpc</groupId>
                  <artifactId>voicemail</artifactId>
                  <version>${v0Version}</version>
              </dependency>`.trim().replace(/^ {16}/gm, ""),
        "utils-grpc": `
              <dependency>
                  <groupId>com.github.working-group-two.wgtwoapis</groupId>
                  <artifactId>utils-grpc</artifactId>
                  <version>${apiVersion}</version>
              </dependency>`.trim().replace(/^ {10}/gm, ""),
        "phonenumber-utils": `
              <dependency>
                  <groupId>com.github.working-group-two.wgtwoapis</groupId>
                  <artifactId>phonenumber-utils</artifactId>
                  <version>${apiVersion}</version>
              </dependency>`.trim().replace(/^ {10}/gm, ""),
        "protobuf-java-util": `
              <dependency>
                  <groupId>com.google.protobuf</groupId>
                  <artifactId>protobuf-java-util</artifactId>
                  <version>3.11.4</version>
              </dependency>`.trim().replace(/^ {10}/gm, ""),
      }
    };
  },
};
</script>
