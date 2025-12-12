/*
Modulos de alto nivel nao devem depender de modulos de baixo nivel. Ambos devem depender de abstracoes.
Dependa de abstracoes, não de implementeções.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações

Classes de baixo nivel são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nivel
*/
import { Messaging } from './services/messaging';
import { Order } from './Class/order';
import { Persistency } from './services/persistency';
import { Product } from './Class/products';
import { ShoppingCart } from './Class/shopping-cart';
import { TenPercentDiscount } from './Class/discount';
import { EnterpriseCostumer /*, IndividualCostumer*/ } from './Class/customer';

//const fiftyPercentDiscount = new FiftyPercentDiscount();
//const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const enterpriseCostumer = new EnterpriseCostumer(
    'Empresa Gigante',
    '2222222222222',
);
/*
const individualCostumer = new IndividualCostumer(
    'Daniel',
    'Gaiguer',
    '111.111.111-11',
);
*/

const order = new Order(
    shoppingCart,
    messaging,
    persistency,
    enterpriseCostumer,
);

shoppingCart.addItem(new Product('camiseta', 49.9));
shoppingCart.addItem(new Product('caderno', 9.9));
shoppingCart.addItem(new Product('lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWidthDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
