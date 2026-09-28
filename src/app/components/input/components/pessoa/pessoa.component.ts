import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPessoa } from '../../input.component';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css',
})
export class PessoaComponent {
  @Input() pessoa!: IPessoa;

  @Output() removerPessoaEmit = new EventEmitter<number>();

  removerPessoa(id: number) {
    this.removerPessoaEmit.emit(id);
  }
}
