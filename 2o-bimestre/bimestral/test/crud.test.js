const assert = require('assert');

const {
    CRUD
  } = require('../src/crud'); // Importe as funções do programa CRUD

describe("CRUD", function() {
  describe("createItem()", function() {
    it("Adicionar um item na lista", function() {
      let c = new CRUD();
      c.createItem("Teste");
      assert.strictEqual(c.items.length, 1);
    });

    it("Adicionar 3 itens na lista", function() {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");
      assert.strictEqual(c.items.length, 3);
    });
  });

  describe("readItems()", function() {

  });
});