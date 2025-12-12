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
/*
const individualCostumer = new IndividualCostumer(
    'Daniel',
    'Gaiguer',
    '111.111.111-11',
);
*/
const enterpriseCostumer = new EnterpriseCostumer(
    'Empresa Gigante',
    '2222222222222',
);

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
