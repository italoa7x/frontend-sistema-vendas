export class Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string

    constructor(id: number, n: string, e: string, s: string){
        this.id = id;
        this.nome = n;
        this.email = e;
        this.senha = s;
    }

}