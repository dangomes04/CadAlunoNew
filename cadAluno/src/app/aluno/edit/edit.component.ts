import { Component, OnInit } from '@angular/core';
import {AlunoDataService} from '../shared/aluno-data.service';
import { AlunoService } from './../shared/aluno.service';
import { Aluno } from '../shared/aluno';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  aluno: Aluno;
  // tslint:disable-next-line:no-inferrable-types
  key: string = '';
  constructor(private alunoService: AlunoService, private alunoDataService: AlunoDataService) { }

  ngOnInit() {
    this.aluno = new Aluno();
    this.alunoDataService.currentAluno.subscribe(data => {
      if (data.aluno && data.key) {
        this.aluno = new Aluno();
        this.aluno.Nome = data.aluno.Nome;
        this.aluno.DataNascimento = data.aluno.DataNascimento;
        this.aluno.Endereco = data.aluno.Endereco;
        this.aluno.RespFinanceiro = data.aluno.RespFinanceiro;
        this.aluno.RespCpf = data.aluno.RespCpf;
        this.aluno.Email = data.aluno.Email;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
this.alunoService.update(this.aluno, this.key);
    } else {
this.alunoService.insert(this.aluno);
    }

    this.aluno = new Aluno();

  }

}
