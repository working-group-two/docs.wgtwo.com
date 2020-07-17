export default function () {

    setInterval(() => {
        updateAuthInSnippets();
        Array.from(document.querySelectorAll("pre code .token")).forEach(el => {
            addClassToElement(el, "${OPERATOR_TOKEN}", "OPERATOR_TOKEN");
            addClassToElement(el, "${ACCESS_TOKEN}", "ACCESS_TOKEN");
            addClassToElement(el, "${USER_TOKEN}", "USER_TOKEN");
            addClassToElement(el, "${CLIENT_ID}", "CLIENT_ID-BASH");
            addClassToElement(el, "${CLIENT_SECRET}", "CLIENT_SECRET-BASH");
            addClassToElement(el, `"CLIENT_ID"`, "CLIENT_ID");
            addClassToElement(el, `"CLIENT_SECRET"`, "CLIENT_SECRET");
            addClassToElement(el, `"ACCESS_TOKEN"`, "ACCESS_TOKEN");
            addClassToElement(el, `"USER_TOKEN"`, "USER_TOKEN");
        });
        setValueFromSessionStorage("OPERATOR_TOKEN", "OPERATOR_TOKEN");
        setValueFromSessionStorage("ACCESS_TOKEN", "ACCESS_TOKEN");
        setValueFromSessionStorage("USER_TOKEN", "USER_TOKEN");
        setValueFromSessionStorage("CLIENT_ID", "CLIENT_ID-BASH");
        setValueFromSessionStorage("CLIENT_SECRET", "CLIENT_SECRET-BASH");
        setValueFromSessionStorage("CLIENT_ID", "CLIENT_ID");
        setValueFromSessionStorage("CLIENT_SECRET", "CLIENT_SECRET");
    }, 200);

    function addClassToElement(element, targetText, className) {
        if (element.innerText === targetText && !element.classList.contains(className)) {
            element.classList.add(className);
        }
    }

    function setValueFromSessionStorage(key, className) {
        const sessionValue = sessionStorage.getItem(key) || key;
        Array.from(document.querySelectorAll("." + className)).forEach(el => {
            const delimiter = el.innerText.charAt(0) === '"' ? "\"" : "";
            if (el.innerText !== delimiter + sessionValue + delimiter) {
                el.innerText = delimiter + sessionValue + delimiter;
            }
        });
    }

    function updateAuthInSnippets() {
        const role = window.selectedRoleSnippet;
        const sessionValue = getSessionValueByRole(role);
        document.querySelectorAll("pre > code").forEach(el => {
            if (role === "THIRD_PARTY_DEV") {
                const token = sessionStorage.getItem("ACCESS_TOKEN") || "ACCESS_TOKEN";
                if (el.textContent.includes(token)) {
                    return;
                }

                el.textContent = el.textContent
                    .replace("import com.wgtwo.api.util.auth.OperatorToken", "import com.wgtwo.api.util.auth.BearerToken")
                    .replace("import com.wgtwo.api.util.auth.UserToken", "import com.wgtwo.api.util.auth.BearerToken")
                    .replace(/OperatorToken\(.*\)/g, 'BearerToken("ACCESS_TOKEN")')
                    .replace(/UserToken\(.*\)/g, 'BearerToken("ACCESS_TOKEN")')
                    .replace(/BearerToken\(.*\)/g, 'BearerToken("ACCESS_TOKEN")')
                    .replace(/"Authorization: Basic .*"/g, `"Authorization: Bearer \$\{ACCESS_TOKEN\}"`)
                    .replace(/"Authorization: Bearer .*"/g, `"Authorization: Bearer \$\{ACCESS_TOKEN\}"`);
                Prism.highlightElement(el);
            } else if (role === "SUBSCRIBER") {
                const token = sessionStorage.getItem("USER_TOKEN") || "USER_TOKEN";
                if (el.textContent.includes(token)) {
                    return;
                }

                el.textContent = el.textContent
                    .replace("import com.wgtwo.api.util.auth.OperatorToken", "import com.wgtwo.api.util.auth.UserToken")
                    .replace("import com.wgtwo.api.util.auth.BearerToken", "import com.wgtwo.api.util.auth.UserToken")
                    .replace(/OperatorToken\(.*\)/g, 'UserToken("USER_TOKEN")')
                    .replace(/BearerToken\(.*\)/g, 'UserToken("USER_TOKEN")')
                    .replace(/UserToken\(.*\)/g, 'UserToken("USER_TOKEN")')
                    .replace(/"Authorization: Basic .*"/g, `"Authorization: Bearer \$\{USER_TOKEN\}"`)
                    .replace(/"Authorization: Bearer .*"/g, `"Authorization: Bearer \$\{USER_TOKEN\}"`);
                Prism.highlightElement(el);
            } else if (role === "OPERATOR") {
                const token = sessionStorage.getItem("ACCESS_TOKEN") || "ACCESS_TOKEN";
                if (el.textContent.includes(token)) {
                    return;
                }

                el.textContent = el.textContent
                    .replace("import com.wgtwo.api.util.auth.UserToken", "import com.wgtwo.api.util.auth.OperatorToken")
                    .replace("import com.wgtwo.api.util.auth.BearerToken", "import com.wgtwo.api.util.auth.OperatorToken")
                    .replace(/UserToken\(.*\)/g, 'OperatorToken("CLIENT_ID", "CLIENT_SECRET")')
                    .replace(/BearerToken\(.*\)/g, 'OperatorToken("CLIENT_ID", "CLIENT_SECRET")')
                    .replace(/OperatorToken\(.*\)/g, 'OperatorToken("CLIENT_ID", "CLIENT_SECRET")')
                    .replace(/"Authorization: Basic .*"/g, `"Authorization: Basic \$\{OPERATOR_TOKEN\}"`)
                    .replace(/"Authorization: Bearer .*"/g, `"Authorization: Basic \$\{OPERATOR_TOKEN\}"`);
                Prism.highlightElement(el);
            }
        });
    }

    function getSessionValueByRole(role) {
        if (role === "THIRD_PARTY_DEV") {
            return sessionStorage.getItem("ACCESS_TOKEN") || "ACCESS_TOKEN";
        } else if (role === "SUBSCRIBER") {
            return sessionStorage.getItem("USER_TOKEN") || "USER_TOKEN";
        } else if (role === "OPERATOR") {
            return sessionStorage.getItem("USER_TOKEN") || "USER_TOKEN";
            el.textContent = el.textContent
                .replace("import com.wgtwo.api.util.auth.UserToken", "import com.wgtwo.api.util.auth.OperatorToken")
                .replace("import com.wgtwo.api.util.auth.BearerToken", "import com.wgtwo.api.util.auth.OperatorToken")
                .replace(/UserToken\(.*\)/g, 'OperatorToken("CLIENT_ID", "CLIENT_SECRET")')
                .replace(/BearerToken\(.*\)/g, 'OperatorToken("CLIENT_ID", "CLIENT_SECRET")')
                .replace(/OperatorToken\(.*\)/g, 'OperatorToken("CLIENT_ID", "CLIENT_SECRET")')
                .replace(/"Authorization: Basic .*"/g, `"Authorization: Basic \$\{OPERATOR_TOKEN\}"`)
                .replace(/"Authorization: Bearer .*"/g, `"Authorization: Basic \$\{OPERATOR_TOKEN\}"`);
            Prism.highlightElement(el);
        }
    }

}
