import Card from "./modules/Card";
import store from "./store/store";

const localStore =  [];

for (let product of store.products) {
  localStore.push(new Card(product.name, product.price));
}

const app = document.createElement('div');
app.classList.add('add')

document.querySelector('#root').append(app);

for (let el of localStore) {
  const goodEl = document.createElement('div');
  goodEl.innerHTML = 
    `<h1>
      ${el.name}
      ${el.price}
      ${el.btn}
    </h1>`
  app.append(goodEl)
}



