// A ordem para aplicar os princípios SOLID, é primeiro fazer o codigo da sua maneira de forma agil e sem pensar muito em principios, desde que ele funcione, e depois disso vir refatorando o codigo, e aplicando os principios SOLID nele.
// Se voce comecar o desenvolvimento com os principios SOLID na cabeça, o desenvolvimento do codigo vai ser muito mais complexo e demorado

// Codigo da forma ingênua:

type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
    private readonly _items: CartItem[] = [];
    private _orderStatus: OrderStatus = 'open';

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    total(): number {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }

    checkout(): void {
        if (this.isEmpty()) {
            console.log('Seu carrinho está vazio');
        }

        this._orderStatus = 'closed';
        this.sendMessage(
            `Seu pedido com total de ${this.total()} foi recebido!`,
        );
        this.saveOrder();
        this.clear();
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log('Mensagem enviada:', msg);
    }

    saveOrder(): void {
        console.log('Pedido Salvo com sucesso...');
    }

    clear(): void {
        console.log('Carrinho de compras foi limpo.');
        this._items.length = 0;
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'caderno', price: 9.9 });
shoppingCart.addItem({ name: 'lapis', price: 1.59 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
