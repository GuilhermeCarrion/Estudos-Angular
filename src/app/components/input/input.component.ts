import { Component } from '@angular/core';
import { PessoaComponent } from './components/pessoa/pessoa.component';

export interface IPessoa {
  id: number;
  nome: string;
  idade: number;
  endereco?: { rua: string; numero: string };
}

@Component({
  selector: 'app-input',
  imports: [PessoaComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  pessoas: IPessoa[] = [
    {
      id: 0,
      nome: 'Felipe',
      idade: 28,
      endereco: { rua: 'Rua CAS', numero: '123' },
    },
    { id: 1, nome: 'Laura', idade: 25 },
  ];

  removerPessoa2(pId: number) {
    this.pessoas = this.pessoas.filter((pessoa) => pessoa.id !== pId);
  }

  removerPessoa() {
    this.pessoas.pop();
  }

  pegarQuantidadePessoas() {
    return this.pessoas.length;
  }
}
