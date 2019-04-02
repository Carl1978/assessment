import {
    convertNumberToString,
    convertNumberToParts,
    buildNumberToString
} from "./convert";

describe("convertNumberToString", () => {
    it("should convert a number into a string", () => {
        expect(convertNumberToString(0)).toBe("zero");
        expect(convertNumberToString(1)).toBe("one");
        expect(convertNumberToString(7)).toBe("seven");
        expect(convertNumberToString(9)).toBe("nine");
    });

    it("should not convert a string into a number", () => {
        expect(convertNumberToString("0")).toBe(null);
        expect(convertNumberToString("one")).toBe(null);
    });

    it("should convert a 2-digit number into a string", () => {
        expect(convertNumberToString(42)).toBe("forty-two");
        expect(convertNumberToString(11)).toBe("eleven");
        expect(convertNumberToString(19)).toBe("nineteen");
        expect(convertNumberToString(55)).toBe("fifty-five");
        expect(convertNumberToString(99)).toBe("ninety-nine");
        expect(convertNumberToString(20)).toBe("twenty");
    });
});

describe("convertNumberToParts", () => {
    it("should covert any number into separate parts", () => {
        expect(convertNumberToParts(7)).toEqual([7]);
        expect(convertNumberToParts(42)).toEqual([42]);
        expect(convertNumberToParts(2001)).toEqual([1, 0, 2]);
        expect(convertNumberToParts(1999)).toEqual([99, 19]);
        expect(convertNumberToParts(17999)).toEqual([99, 9, 17]);
        expect(convertNumberToParts(24321)).toEqual([21, 3, 24]);
        expect(convertNumberToParts(200)).toEqual([0, 2]);
        expect(convertNumberToParts(220)).toEqual([20, 2]);
    });
});

describe("buildNumberToString", () => {
    it("should build a number string from a number", () => {
        expect(buildNumberToString(7)).toBe("seven");
        expect(buildNumberToString(42)).toEqual("forty-two");
        expect(buildNumberToString(789)).toEqual(
            "seven hundred and eighty-nine"
        );
        expect(buildNumberToString(2001)).toEqual("two thousand and one");
        expect(buildNumberToString(1999)).toEqual(
            "nineteen hundred and ninety-nine"
        );
        expect(buildNumberToString(17999)).toEqual(
            "seventeen thousand nine hundred and ninety-nine"
        );
        expect(buildNumberToString(24321)).toEqual(
            "twenty-four thousand three hundred and twenty-one"
        );
        expect(buildNumberToString(200)).toEqual("two hundred");
        expect(buildNumberToString(210)).toEqual("two hundred and ten");
        expect(buildNumberToString(220)).toEqual("two hundred and twenty");
    });

    it("should not accept any value other than numbers", () => {
        expect(buildNumberToString("123")).toBe(null);
    });
});
