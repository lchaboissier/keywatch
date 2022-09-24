import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './service/http.service';
import { PromiseService } from './service/promise.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpService,
    PromiseService
  ]
})
export class SharedModule { }
