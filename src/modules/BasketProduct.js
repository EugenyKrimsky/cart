import Good from "./Good";

export default class BasketProduct extends Good {
  constructor(id, name, price) {
    super(id, name, price);
    this.quantity = 1;
    this.card = document.createElement('div');
    
  }
  getCard() {
    this.card.append(`<h3>${this.name}</h3> <span>${this.price} ${this.quantity}</span>`)
    this.card.classList.add('good');
    return this.card;
    
  }
}