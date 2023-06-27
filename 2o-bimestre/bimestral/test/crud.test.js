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
    it("Lê os intens da lista", function () {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");

      let a = c.readItems()
      assert.strictEqual(a.length, 3);
    });
  });

  describe("readItem()", function() {
    it("Lê 2 intens da lista", function () {
      let c = new CRUD();
      c.createItem("Item 1");
      c.createItem("Item 2");
      c.createItem("Item 3");

      let a = c.readItem(0);
      let b = c.readItem(1);
      assert.strictEqual(a, c.readItem(0));
      assert.strictEqual(b, c.readItem(1));
    });  
  });
  describe("updateItem()", function() {
    it("Atualiza os intens da lista", function () {
      let c = new CRUD();
      c.createItem("Iten 1");
      c.createItem("Idem 2");
      c.createItem("Item 3");

      c.updateItem(0, "Item 1")
      c.updateItem(1, "Item 2")
      assert.strictEqual(c.readItem(0), "Item 1");
      assert.strictEqual(c.readItem(1), "Item 2");
    });
  });
  describe("deleteItem()", function() {
    it("Deleta 2 intens da lista", function () {
      let c = new CRUD();
      c.createItem("Iten 1");
      c.createItem("Idem 2");
      c.createItem("Item 3");

      assert.ok(c.deleteItem(0));
      assert.ok(c.deleteItem(1));
    });
  });
});