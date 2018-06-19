import { Cargo } from './cargo';
import { Endereco } from './endereco';
import { Conta } from './conta';

export class Colaborador {
    id: number;
    name: string;
    endereco: Endereco;
    cargo: Cargo;
    conta: Conta;
    cpf: number;
    dtNascimento: Date;
    email: string;
    genero: string;
    ctps_num: number;
    pis_pasep: number;
}