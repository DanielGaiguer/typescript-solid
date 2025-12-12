/*
O princípio da substituição de Liskov (LSP) afirma que as funções que usam ponteiros ou referências a classes base devem ser capazes de usar objetos de classes derivadas sem saber disso.

Resumo: Subtipos precisam ser substituíveis por seus tipos de base.

Exemplo: Se meu programa espera Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './Class/order';
import { Persistency } from './services/persistency';
import { Product } from './Class/products';
import { ShoppingCart } from './Class/shopping-cart';
import { TenPercentDiscount } from './Class/discount';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
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
