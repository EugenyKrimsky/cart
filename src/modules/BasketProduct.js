import basket from "../state/basket";
import Good from "./Good";

export default class BasketProduct extends Good {
  constructor(id, name, price) {
    super(id, name, price);
    this.quantity = 1;
    this.basketElement = document.querySelector('.basket');
    this.totalPrice = document.querySelector('.sum_price_busket');
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
    this.card.remove();
  }
  changeTotalPrice() {
    const prices = basket.products.map(el => el.price * el.quantity);
    this.totalPrice.innerText = prices.reduce((acc, curr) => acc + curr, 0);
  }
}