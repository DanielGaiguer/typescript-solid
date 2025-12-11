// Na Clean architecture, existe o Main, o main é o Layer mais sujo de toda arquitetura
import { Messaging } from './services/messaging';
import { Order } from './entites/order';
import { Persistency } from './services/persistency';
import { Product } from './entites/products';
import { ShoppingCart } from './entites/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('camiseta', 49.9));
shoppingCart.addItem(new Product('caderno', 9.9));
shoppingCart.addItem(new Product('lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
