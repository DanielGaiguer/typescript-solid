/*
Interface Segregation Principle (Principio da segregação de Interface) -
os clientes não devem ser forçados a depender de interfaces que não utilizam
Interface pode ser qualquer protocol, como type, interfaces ou membros abstratos que não utilizem, por heraça por exemplo, coisas que elas não irão utilizar
Para resolver isso, não devemos criar interfaces muito infladas, pois, fazendo isso você está quebrando o ISP
*/

import {
    IndividualCustomerProtocol,
    EnterpriseCostumerProtocol,
    CustomerOrder,
} from './interfaces/costumer-protocol';

export class IndividualCostumer
    implements IndividualCustomerProtocol, CustomerOrder
{
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

    getName(): string {
        return this.firstName + this.lastName;
    }

    getIDN(): string {
        return this.cpf;
    }
}

export class EnterpriseCostumer
    implements EnterpriseCostumerProtocol, CustomerOrder
{
    name: string;
    cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    getName(): string {
        return this.name;
    }

    getIDN(): string {
        return this.cnpj;
    }
}
