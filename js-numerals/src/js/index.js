import { buildNumberToString } from "./convert";

// DOM elements
const myForm = document.getElementsByClassName("my-form")[0];
const inputNumber = document.getElementById("input-number");
const outputText = document.getElementById("output-text");

const initListeners = () => {
    myForm.addEventListener("submit", handleSubmit);
};

const handleSubmit = event => {
    if (event) {
        event.preventDefault();
        if (inputNumber && inputNumber.value !== "") {
            let num = parseInt(inputNumber.value);
            let str = buildNumberToString(num);

            if (outputText) {
                outputText.textContent = str;
            }
        }
    }
};

initListeners();

// debug
//let str = buildNumberToString(17999);
//console.log("17999 == " + str);
