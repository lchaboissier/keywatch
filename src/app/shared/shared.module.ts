import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from './http.service';
import { PromiseService } from './service/promise.service';
import { ModelScore } from './model/score/model-score';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    TableComponent
  ],
  providers: [
    HttpService,
    PromiseService,
    ModelScore
  ]
})
export class SharedModule { }
