import StoreProduct from "./modules/StoreProduct";
import store from "./store/store";

const app = document.createElement('div');
app.classList.add('app')

const localStore =  [];

// creating store
const storeBlock = document.createElement('div');
storeBlock.innerHTML = '<h2>Store</h2>'
storeBlock.classList.add('store');
app.prepend(storeBlock)

for (let product of store.products) {
  localStore.push(new StoreProduct(product.id, product.name, product.price));
}

document.querySelector('#root').append(app);

for (let el of localStore) {
  const goodEl = document.createElement('div');
  goodEl.classList.add('good');
  goodEl.innerHTML = `<h3>${el.name}</h3> <span>${el.price}</span> `;
  goodEl.append(el.btn)
  storeBlock.append(goodEl)
}

//creating basket
const basket = document.createElement('div');
basket.innerHTML = '<h2>Basket</h2>';
basket.classList.add('basket');
app.append(basket);






