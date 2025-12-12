import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/costumer-protocol';

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency,
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
