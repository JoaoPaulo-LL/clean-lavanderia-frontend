export interface Cliente {
    id: string;
    cpf: string;
    dataCadastro: string;
    email: string;
    endereco: Endereco;
    nome: string;
    observacoes: string;
    status: string;
    telefone: string;
}

export interface Endereco {
    bairro: string;
    cep: string;
    cidade: string;
    complemento: string;
    estado: string;
    numero: string;
    rua: string;
}