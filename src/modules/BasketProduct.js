import basket from "../state/basket";
import Good from "./Good";

export default class BasketProduct extends Good {
  constructor(id, name, price) {
    super(id, name, price);
    this.quantity = 1;
    this.card = document.createElement('div');
    this.basketElement = document.querySelector('.basket');
  }
  createCard() {
    this.card.innerHTML = `<h3>${this.name}</h3> <span>${this.price}</span> <strong id="price">${this.quantity}</strong>`;
    this.card.classList.add('good');
    this.basketElement.append(this.card);    
  }
  changeQuantity() {
    const price = this.card.querySelector('#price');
    price.innerHTML = this.quantity;
  }
  removeCard() {
    this.card.innerHTML = '';
  }
}