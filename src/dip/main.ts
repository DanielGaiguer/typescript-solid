/*
Modulos de alto nivel nao devem depender de modulos de baixo nivel. Ambos devem depender de abstracoes.
Dependa de abstracoes, não de implementeções.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações

Classes de baixo nivel são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nivel

Uma classe de alto nivel e uma classe que chama outras classes de baixo nivel, porem ela nao sabe implementar os elementos daquela classe sem ela
Uma classe de baixo nivel e uma classe que e chamada a partir de uma classe de alto nivel, e que implementa coisas a essa classe
Quanto mais abstrata, mais alto nivel ela vai ser, por exemplo uma interface, ela por si so nao faz nada, mas diz o que outras classes devem fazer
UM extremo baixo nivel e uma classe que implementa um metodo que faz alguma coisa, uma classe assim e chamada de classe concreta, pois e uma classe que faz a tarfea, uma classe de baixo nivel
*/
import { Messaging } from './services/messaging';
import { Order } from './Class/order';
import { Persistency } from './services/persistency';
import { Product } from './Class/products';
import { ShoppingCart } from './Class/shopping-cart';
import { TenPercentDiscount } from './Class/discount';
import { EnterpriseCostumer /*, IndividualCostumer*/ } from './Class/customer';
//import { MessagingProtocol } from './Class/interfaces/messaging-protocol';

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

// Qual o beneficio disso? Vamos criar uma classe MOCK. Vamos supor que a classe messaging e uma classe que realemnte manda emails, mas precismaos testar com uma MOCK, uma classe que vai fingir criar um email

/*
class MessagingMock implements MessagingProtocol {
    sendMessage(): void {
        console.log('A classe foi enviada pelo MOCK');
    }
}
const messagingMock = new MessagingMock();
*/

const order = new Order(
    shoppingCart,
    messaging, // Agora, caso a messaging mock fosse colocada aqui, a classe nao se importaria, ja que ela implementa o protocolo
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
