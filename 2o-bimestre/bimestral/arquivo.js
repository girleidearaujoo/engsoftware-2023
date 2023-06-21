const fs = require('fs');

const dataFilePath = 'data.json';

// Função para ler o arquivo JSON
function readData() {
  try {
    const jsonData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
}

// Função para escrever os dados no arquivo JSON
function writeData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataFilePath, jsonData, 'utf8');
}

// Função para criar um novo item
function createItem(item) {
  const data = readData();
  data.push(item);
  writeData(data);
}

// Função para listar todos os itens
function listItems() {
  return readData();
}

// Função para buscar um item pelo ID
function getItemById(id) {
  const data = readData();
  return data.find(item => item.id === id);
}

// Função para atualizar um item pelo ID
function updateItem(id, updatedItem) {
  const data = readData();
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedItem };
    writeData(data);
    return true;
  }
  return false;
}

// Função para excluir um item pelo ID
function deleteItem(id) {
  const data = readData();
  const index = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data.splice(index, 1);
    writeData(data);
    return true;
  }
  return false;
}

// Exemplo de uso:

// Criar um novo item
const newItem = { id: 1, name: 'Item 1' };
createItem(newItem);

// Listar todos os itens
const allItems = listItems();
console.log(allItems);

// Buscar um item pelo ID
const item = getItemById(1);
console.log(item);

// Atualizar um item pelo ID
const updatedItem = { name: 'Item Atualizado' };
const isUpdated = updateItem(1, updatedItem);
console.log(isUpdated);

// Excluir um item pelo ID
const isDeleted = deleteItem(1);
console.log(isDeleted);