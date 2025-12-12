/*
Interface Segregation Principle (Principio da segregação de Interface) -
os clientes não devem ser forçados a depender de interfaces que não utilizam
Interface pode ser qualquer protocol, como type, interfaces ou membros abstratos que não utilizem, por heraça por exemplo, coisas que elas não irão utilizar
Para resolver isso, não devemos criar interfaces muito infladas, pois, fazendo isso você está quebrando o ISP
*/

import {
    IndividualCustomerProtocol,
    EnterpriseCostumerProtocol,
} from './interfaces/costumer-protocol';

export class IndividualCostumer implements IndividualCustomerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;
    cnpj: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.cnpj = '';
    }
}

export class EnterpriseCostumer implements EnterpriseCostumerProtocol {
    name: string;
    cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }
}
