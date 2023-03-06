// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("should encode 'thinkful'", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.equal(expected);
    })

    it("should encode with spaces", () => {
      const actual = substitution(
        "You are an excellent spy",
        "xoyqmcgrukswaflnthdjpzibev"
      );
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });
    
    it("should decode 'jrufscpw'", () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

     it("should encode 'message' using special characters", () => {
       const actual = substitution("message","$wae&zrdxtfcygvuhbijnokmpl");
       const expected = "y&ii$r&";
       expect(actual).to.equal(expected);
     });
     
     it("should decode 'y&ii$r&' using special characters", () => {
       const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
       const expected = "message";
       expect(actual).to.equal(expected);
     });

     it("should return false when alphabet < 26 characters long", () => {
       const actual = substitution("thinkful", "short");
       expect(actual).to.be.false;
     });

     it("should return false when alphabet has repeating characters", () => {
       const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
       expect(actual).to.be.false;
     });
})