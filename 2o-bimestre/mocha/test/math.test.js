const assert = require("assert");
const { soma, sub, mult, div } = require("../src/math");

describe("Math", function() {
    describe("Soma()", function() {
        it("Deve retornar a soma de dois números", function() {
            assert.strictEqual(soma(2,3),5);
            assert.strictEqual(soma(-1,5),4);
            assert.strictEqual(soma(0,0),0);
            assert.strictEqual(soma(-1,-3),-4);
        });
        it("Deve retornar a soma de números irracionais", function() {
            assert.strictEqual(soma(1.333,0.667),2);
        });
    });

    describe("Sub()", function() {
        it("Deve retornar a sub de dois números", function() {
            assert.strictEqual(sub(5,3),2);
            assert.strictEqual(sub(-1,-2),1);
            assert.strictEqual(sub(1,-3),4);
        });
    });

    describe("Mult()", function() {
        it("Deve retornar o mult de dois números", function() {
            assert.strictEqual(mult(1,0),0);
        });
    });

    describe("Div()", function() {
        it("Deve retornar a div de dois números", function() {
            assert.strictEqual(div(8, 2), 4)
            assert.strictEqual(div(5,0), Infinity);
        });
    });
});