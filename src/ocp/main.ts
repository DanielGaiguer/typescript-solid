/*
Open/closed principle
Entidades devem estar abertas para extensao, mas fechada para modificacao
*/
/*
O padrao de projeto strategy, da GoF, visa criar algoritimos que voce pode injetar em determinadas classes, e estes algoritmos podem varias de acordo com os criterios.
*/

import { Messaging } from './services/messaging';
import { Order } from './Class/order';
import { Persistency } from './services/persistency';
import { Product } from './Class/products';
import { ShoppingCart } from './Class/shopping-cart';
import { NoDiscount } from './Class/discount';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('camiseta', 49.9));
shoppingCart.addItem(new Product('caderno', 9.9));
shoppingCart.addItem(new Product('lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWidthDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
