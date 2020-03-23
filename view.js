export class View {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
  }

  render(data) {
    // Form
    const htmlForm = `<input id="inputItem" type="text"></input><button id="buttonAdd">Add Item</button>`;
    let htmlList = `<ul>`;
    for (let i = 0; i < data.length; i++) {
      const itemText = data[i].text;
      const itemDate = data[i].timeStamp;
      const listItem = `<li>${itemText}, ${itemDate}</li>`;
      htmlList += listItem;
    }
    htmlList += `</ul>`;
    this.app.innerHTML = htmlForm + htmlList;

    // Controls
    const buttonAdd = document.getElementById('buttonAdd');
    this.inputItem = document.getElementById('inputItem');

    // Events
    buttonAdd.addEventListener('click', () => {
      this.presenter.buttonAddClicked();
    });
  }

  getItemText() {
    return this.inputItem.value;
  }
}
