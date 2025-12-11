// SRP é o principio que uma classe deve ter um e apenas um motivo para mudar, ou seja, uma classe deve ter somente 1 responsabilidade.
// Podemos entender uma responsabilidade como coisas que ja estamos acostumados a ver no programa, como enviar mensagens, voce salvar os dados, uma regra de negocio, validacao em alguns casos, isso tudo sao exemplos de responsabilidades que devem estar a parte na classe, inves de tudo em uma classe so.
// Nao tem problema 1 classe fazer varias coisas, mas essas coisas devem ter coerencia entre elas

// De acordo com o livro "O codigo limpo", uma classe pode ser considerada coesa quando ela utiliza os seus atributos dentro dos seus metodos

import { CartItem } from './interfaces/cart_item';

export class ShoppingCart {
    private readonly _items: CartItem[] = [];

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    total(): number {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        console.log('Carrinho de compras foi limpo.');
        this._items.length = 0;
    }
}
