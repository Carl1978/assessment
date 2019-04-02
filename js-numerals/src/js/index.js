import { buildNumberToString } from "./convert";

// debug
let str = buildNumberToString(17999);
console.log("17999 == " + str);

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
        if (inputNumber) {
            let num = parseInt(inputNumber.value);
            console.log(`handleSubmit : num : ${num}`);
            if (outputText) {
                outputText.textContent = num;
            }
        }
    }
};

initListeners();
