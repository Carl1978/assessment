import { hello } from "./convert";

describe("hello", () => {
    it("should output hello", () => {
        expect(hello()).toBe("hello");
    });
});
