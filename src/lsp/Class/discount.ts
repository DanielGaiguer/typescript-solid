// Exemplo quebrando o principio da substituicao de Liskov // Se voce mudar o tipo de retorno da sua classe Mãe, voce vai quebrando o principio da substituicao de Liskov
//Forcar que as subclasses implemente este metodo, por exemplo lancando um erro se caso nao implementar (caso a classe nao seja abstrata) tambem e quebrar o principio da substituicao de Liskov
// Resumindo, em todo lugar que eu for usar discount, o comportamento esperado dos subtipos de discount, deve ser o mesmo de discount
export abstract class Discount {
    protected discount = 0;

    calculate(price: number): number {
        return price - price * this.discount;
    }
}

export class FiftyPercentDiscount extends Discount {
    protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
    protected readonly discount = 0.1;
}

// Fazendo isso, voce tambem estaria quebrando o principio da substituicao de Liskov, mesmo nao mudando no funcionamento do programa, pois assim voce esta mudando o retorno da classe base, mesmo nao violando a tipagem
// Voce tambem quebra o principio, se voce muda o comportamento do retorno
export class NoDiscount extends Discount {}
