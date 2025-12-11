import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly cart: ShoppingCart, // Isso se chama injecao de dependencia
        private readonly messaging: Messaging, // Fazer isso quebra outro principio, ja que a classe fica muito dependente, seria interresantes tudo isso ser abstracao, par nao depender disso.
        private readonly persistency: Persistency,
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
            `Seu pedido com total de ${this.cart.total()} foi recebido!`,
        );
        this.persistency.saveOrder();
        this.cart.clear();
    }
}
