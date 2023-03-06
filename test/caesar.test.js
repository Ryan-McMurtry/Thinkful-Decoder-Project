// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe ('Caesar Shift', () => {
    it(`should be 'wklnixo' when (thinkful, 3) is inputted`, () => {
        const message = "thinkful";
        const shift = 3
        const actual = caesar(message, shift);
        const expected = "wklqnixo";
        
        expect(actual).to.equal(expected);
    })

    
    it(`should be 'qefkhcri' when (thinkful, -3) is inputted`, () => {
        let actual = caesar("thinkful", -3);
        let expected = "qefkhcri";
        expect(actual).to.equal(expected);
    });

    it(`should be 'thinkful' when (thinkful, 3, false) is inputted`, () => {
        let actual = caesar("wklqnixo", 3, false);
        let expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it(`should be 'bpqa qa i amkzmb umaaiom!' when ("This is a secret message!", 8) is inputted`, () => {
      let actual = caesar("This is a secret message!", 8);
      let expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.equal(expected);
    });

    it(`should be 'This is a secret message!' when ("BPQA qa I amkzmb umaaiom!", 8, false) is inputted`, () => {
      let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      let expected = "this is a secret message!";
      expect(actual).to.equal(expected);
    });

    it(`should be 'false' when (thinkful) is inputted`, () => {
        let actual = caesar("thinkful");
        expect(actual).to.be.false;
    });

    it(`should be 'false' when (thinkful, 99) is inputted`, () => {
        let actual = caesar("thinkful", 99);
        expect(actual).to.be.false;
    });
    
    it(`should be 'false' when (thinkful, -26) is inputted`, () => {
        let actual = caesar("thinkful", -26);
        expect(actual).to.be.false;
    });
})



