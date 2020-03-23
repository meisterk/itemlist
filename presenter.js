import { View } from './view.js';
import { Model } from './model.js';
import { Item } from './item.js';

export class Presenter {
  constructor() {
    this.model = new Model();
    const data = this.model.getData();

    this.view = new View(this);
    this.view.render(data);
  }

  buttonAddClicked() {
    // get data from view
    const itemText = this.view.getItemText();
    const item = new Item(itemText);

    // add item to model
    this.model.addItem(item);

    // get new data from model
    const data = this.model.getData();

    // refresh view
    this.view.render(data);
  }
}
