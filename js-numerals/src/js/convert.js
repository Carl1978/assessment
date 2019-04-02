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

export const convertNumberToParts = num => {
    if (typeof num === "number") {
        let arr = [];
        let str = num.toString();
        let len = str.length;
        let end = 0;
        let start = 0;
        let count = 0;
        let part = 0;

        while (len > 0) {
            end = start = len;
            start -= 2;
            if (start < 0) start = 0;
            part = parseInt(str.slice(start, end));
            if (count == 1) {
                if (part > 19) {
                    start++;
                    part = parseInt(str.slice(start, end));
                }
            }

            arr.push(part);
            len = start;
            count++;
        }

        return arr;
    }

    return null;
};

export const buildNumberToString = num => {
    if (typeof num === "number") {
        const arrDelimeter = ["-", "and"];
        let parts = convertNumberToParts(num);
        let len = parts.length;
        let strNumber = "";
        let index = 0;
        let str = "";
        while (index < len) {
            str = convertNumberToString(parts[index]);
            // 0-99
            if (index == 0) {
                strNumber = str;
            }
            // hundreds
            else if (index == 1) {
                if (parts[index] != 0) {
                    strNumber = str + " hundred and " + strNumber;
                }
            }
            // thousands
            else if (index == 2) {
                if (parts[index] != 0) {
                    if (parts[index - 1] != 0)
                        strNumber = str + " thousand " + strNumber;
                    else strNumber = str + " thousand and " + strNumber;
                }
            }
            index++;
        }

        return strNumber;
    }

    return null;
};
