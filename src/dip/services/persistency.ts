import { PersistencyProtocol } from '../Class/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
    saveOrder(): void {
        console.log('Pedido Salvo com sucesso...');
    }
}
