// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

  describe("encoding a message", () => {
    it("should return 4432423352125413 when (thinkful) is inputted", () => {
      const message = "thinkful";
      const actual = polybius(message);
      const expected = "4432423352125413";

      expect(actual).to.equal(expected);
    });

    it("should return 3251131343 2543241341 when (Hello world) is inputted", () => {
      const message = "Hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });

    it("should return 'hello world' when (3251131343 2543241341, false) is inputted", () => {
        const actual = polybius('3251131343 2543241341', false);
        const expected = "hello world";

        expect(actual).to.equal(expected);
    });

    it("should return 'th(i/j)nkful' when (4432423352125413, false) is inputted", () => {
      const actual = polybius("4432423352125413", false);
      const expected = "th(i/j)nkful";

      expect(actual).to.equal(expected);
    });

    it("should return false when (44324233521254134, false) is inputted", () => {
      const actual = polybius("44324233521254134", false);

      expect(actual).to.be.false;
    });

  });
