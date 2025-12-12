export interface CustomerOrder {
    getName(): string;
    getIDN(): string;
}

export interface IndividualCustomerProtocol {
    firstName: string;
    lastName: string;
    cpf: string;
}

export interface EnterpriseCostumerProtocol {
    name: string;
    cnpj: string;
}
