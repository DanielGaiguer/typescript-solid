//import { Persistency } from '../services/persistency';
//import { Messaging } from '../services/messaging';
//import { ShoppingCart } from './shopping-cart';
import { OrderStatus } from './interfaces/order-status'; // Desta forma, TODAS as dependencias depende de interfaces, NENHUMA de classe concreta
import { CustomerOrder } from './interfaces/costumer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

// Nos estamos fazendo uma classe de alto nivel (Order) depender de classes de baixo nivel, shopping cart por exemplo e todas que estao em contructor, ou seja, e classe concreta dependendo de classe concreta
// O problema disso é o acoplamento estre essas classes, estas duas classes so andam juntas, a classe Order so funciona corretamente, se TODAS as outras classes estiverem instanciadas e forem enviadas como dependencia. Isso e um codigo super acoplado
// Nos vamos fazer tanto a classe de alto nivel quanto a classe de baixo nivel depender da interface, de um protocolo, ao inves de depender diretamente uma da outra
// Aqui e o codigo ingenua:
export class Order {
    private _orderStatus: OrderStatus = 'open';

    //Segundo o DIP, depois de fazer a interface para Shopping cart, os dois devem depender de abstraceos, tanto shopping cart, quanto order, entao ela nao depende da classe concreta, ela depende da abstracao, do protocolo do shopping
    constructor(
        // private readonly cart: ShoppingCart, //Antes
        private readonly cart: ShoppingCartProtocol, //Agora
        private readonly messaging: MessagingProtocol,
        private readonly persistency: PersistencyProtocol,
        private readonly costumer: CustomerOrder,
    ) {}

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Seu carrinho está vazio');
        }

        this._orderStatus = 'closed';
        this.messaging.sendMessage(
            `Seu pedido com total de ${this.cart.totalWidthDiscount()} foi recebido!`,
        );
        this.persistency.saveOrder();
        this.cart.clear();
        // Desta forma, independerte do costumer ser uma empresa ou pessoa, estes dois metodos existem nas duas interfaces
        console.log(
            `O cliente é: ${this.costumer.getName()} ${this.costumer.getIDN()}`,
        );
    }
}
