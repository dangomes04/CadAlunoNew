
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EditComponent } from './aluno/edit/edit.component';
import { ListComponent } from './aluno/list/list.component';
import { AlunoService } from './aluno/shared/aluno.service';
import { AlunoDataService } from './aluno/shared/aluno-data.service';




@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
