import { DAO } from './dao.js';

export class Model {
  constructor() {
    this.dao = new DAO();
    this.data = this.dao.readData();
  }

  // CREATE
  addItem(item) {
    this.data.push(item);
    this.dao.saveData(this.data);
  }

  // READ
  getData() {
    return this.data;
  }

  // UPDATE

  // DELETE
}
