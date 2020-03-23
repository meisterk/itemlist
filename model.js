export class Model {
  constructor() {
    this.data = [];
  }

  // CREATE
  addItem(item) {
    this.data.push(item);
  }

  // READ
  getData() {
    return this.data;
  }

  // UPDATE

  // DELETE
}
