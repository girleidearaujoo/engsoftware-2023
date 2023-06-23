const assert = require("assert");
const { soma } = require("../src/math");

describe("Math", function() {
    describe("Soma()", function() {
        it("Deve retornar  a soma de dois números", function() {
            assert.strictEqual(soma(2,3),5);
            assert.strictEqual(soma(-1,5),4);
            assert.strictEqual(soma(0,0),0);
        });
    })
});