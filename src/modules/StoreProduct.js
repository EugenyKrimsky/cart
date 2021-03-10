import basket from "../state/basket";
import BasketProduct from "./BasketProduct";
import Good from "./Good";

export default class StoreProduct extends Good{
  constructor(id, name, price) {
    super(id, name, price);
    this.inBasket = false;

    this.addBtn = document.createElement('button');
    this.addBtn.innerText = 'Add';
    this.addBtn.addEventListener('click', this.add.bind(this));

    this.minusBtn = document.createElement('button');
    this.minusBtn.innerText = 'Minus';
    this.minusBtn.addEventListener('click', this.minus.bind(this));
    
      
  }
  isInBasket() {
    return basket.products.some(el => el.id === this.id);
  }
  add() {
    if (!this.isInBasket()) {
      this.inBasket = true;
      const good = new BasketProduct(this.id, this.name, this.price);
      basket.products.push(good);
      good.createCard();

      this.card.append(this.minusBtn);
      good.changeTotalPrice();
    } else {
      basket.products.forEach(el => {
        if (el.id === this.id) {
          el.quantity++;
          el.changeQuantity();
          el.changeTotalPrice();
        }
      })
    }  

  }
  minus() {
    basket.products.forEach(el => {
      if (el.id === this.id) {
        if (el.quantity - 1 === 0) {
           this.minusBtn.remove();
           el.removeCard();
           basket.products.forEach((el, i) => {
             if (el.id === this.id) {
               basket.products.splice(i, 1);
             }
            el.changeTotalPrice();
           });
          } else {
            el.quantity--;
            el.changeQuantity();
            el.changeTotalPrice();
          }
        }
    })
    
  }
}

