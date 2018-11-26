import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private db: AngularFireDatabase) { }
  getAll() {

    return this.db.list('aluno')
    .snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    })
    );
  }

  getById(Matricula: number) {

  }

  insert(aluno: Aluno) {
    this.db.list('aluno').push(aluno)
    .then((result: any) => {
      console.log(result.key);
    });

  }

  update(aluno: Aluno, key: string) {
    this.db.list('aluno').update(key, aluno)
    .catch((error: any) => {
      console.error(error);
     });
  }

  remove(Matricula: number) {

    this.db.object('aluno/${key}').remove();

  }


}


