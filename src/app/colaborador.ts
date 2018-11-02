import { Cargo } from './cargo';
import { Endereco } from './endereco';
import { Conta } from './conta';
import { Telefone } from './telefone';

export class Colaborador {
    id: number;
    nome: string;
    cpf: number;
    dtNascimento: Date;
    genero: string;
    email: string;
    ctpsNum: number;
    pisPasep: number;
    conta: Conta;
    telefone: Telefone;
    endereco: Endereco;
    cargo: Cargo;
    salarioAtual: number;
    horasTrabalhadas: number;
    numSerieRFID: string;
}