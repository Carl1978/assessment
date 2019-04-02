export const convertNumberToString = num => {
    const arr1to19 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const arr10s = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    const arrDigits = [arr10s, arr1to19];

    if (typeof num === "number") {
        let str = num.toString();
        if (str.length == 1 || num <= 19) {
            return arr1to19[num];
        } else if (str.length == 2) {
            let arr = str.split("");
            let strNumber = arr.map((digit, index) => {
                return arrDigits[index][digit];
            });
            return strNumber.join("-");
        }
    }

    return null;
};
