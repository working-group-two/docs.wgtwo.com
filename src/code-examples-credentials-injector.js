export default function () {

    setInterval(() => {
        Array.from(document.querySelectorAll("pre code .token")).forEach(el => {
            addClassToElement(el, "${OPERATOR_TOKEN}", "OPERATOR_TOKEN");
            addClassToElement(el, "${CLIENT_ID}", "CLIENT_ID-BASH");
            addClassToElement(el, "${CLIENT_SECRET}", "CLIENT_SECRET-BASH");
            addClassToElement(el, `"CLIENT_ID"`, "CLIENT_ID");
            addClassToElement(el, `"CLIENT_SECRET"`, "CLIENT_SECRET");
        });
        setValueFromSessionStorage("OPERATOR_TOKEN", "OPERATOR_TOKEN", false);
        setValueFromSessionStorage("CLIENT_ID", "CLIENT_ID-BASH", false);
        setValueFromSessionStorage("CLIENT_SECRET", "CLIENT_SECRET-BASH", false);
        setValueFromSessionStorage("CLIENT_ID", "CLIENT_ID", true);
        setValueFromSessionStorage("CLIENT_SECRET", "CLIENT_SECRET", true);
    }, 50);

    function addClassToElement(element, targetText, className) {
        if (element.innerText === targetText && !element.classList.contains(className)) {
            element.classList.add(className);
        }
    }

    function setValueFromSessionStorage(key, className, isString) {
        let sessionValue = sessionStorage.getItem(key) || key;
        Array.from(document.querySelectorAll("." + className)).forEach(el => {
            let delimiter = isString ? "\"" : "";
            if (el.innerText !== delimiter + sessionValue + delimiter) {
                el.innerText = delimiter + sessionValue + delimiter;
            }
        });
    }

}
