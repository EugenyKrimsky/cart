import './styles/index.scss'
import StoreProduct from "./modules/StoreProduct";
import store from "./state/store";

const app = document.createElement('div');
app.classList.add('app')

const localStore =  [];
window.localStore = localStore;

// creating store
const storeBlock = document.createElement('div');
app.prepend(storeBlock);
storeBlock.insertAdjacentHTML('beforebegin','<h2>Store</h2>');
storeBlock.classList.add('store');


for (let product of store.products) {
  localStore.push(new StoreProduct(product.id, product.name, product.price));
}

document.querySelector('#root').append(app);

for (let el of localStore) {
  el.card.innerHTML = `<h3>${el.name}</h3> <span>${el.price}</span> `;
  el.card.classList.add('good');
  el.card.append(el.addBtn);
  storeBlock.append(el.card);
}

//creating basket
const basket = document.createElement('div');
basket.classList.add('basket');
app.insertAdjacentElement('beforeend', basket);
const basketTittle = document.createElement('h2');
basketTittle.innerText = 'Basket';
basket.insertAdjacentElement('beforebegin', basketTittle);

const sumPriceBusket = document.createElement('div');
sumPriceBusket.classList.add('total_price_block');
sumPriceBusket.insertAdjacentHTML('afterbegin', '<span>Total Price: </span>');
sumPriceBusket.insertAdjacentHTML('beforeend', '<span class="sum_price_busket">0</span>');
basketTittle.after(sumPriceBusket);






