import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../shared/aluno';
import { AlunoDataService } from './../shared/aluno-data.service';
import { AlunoService } from './../shared/aluno.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
aluno: Observable<any>;
  constructor(private alunoService: AlunoService, private alunoDataService: AlunoDataService) { }

  ngOnInit() {
    this.aluno = this.alunoService.getAll();
  }

  remove(key: string) {


  }

  edit(aluno: Aluno, key: string) {
    this.alunoDataService.changeAluno(aluno, key);
  }

}
