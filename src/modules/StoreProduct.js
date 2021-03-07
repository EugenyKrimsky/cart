import BasketProduct from "./BasketProduct";
import Good from "./Good";

export default class StoreProduct extends Good{
  constructor(id, name, price) {
    super(id, name, price);
    this.btn = document.createElement('button');
    this.btn.innerText = 'Add';
    this.btn.addEventListener('click', this.add.bind(this))
  }
  add() {
    let good = new BasketProduct(this.id, this.name, this.price);
    return good.getCard();
  }

}