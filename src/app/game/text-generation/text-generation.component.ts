import { Component, OnInit } from '@angular/core';
import { PromiseService } from 'src/app/shared/service/promise.service';

@Component({
  selector: 'app-text-generation',
  templateUrl: './text-generation.component.html',
  styleUrls: ['./text-generation.component.scss']
})
export class TextGenerationComponent implements OnInit {

  constructor(public promise : PromiseService) { }

  public loading: boolean = true;
  public paragraph: any = ""; 
  public wordNumber : number = 0;
  public letterNumber : number = 0;

  ngOnInit(): void {
    this.promise.getData().then(value => {
      this.paragraph = value;
      this.wordNumber = this.paragraph[0].body.split(' ').length;
      this.letterNumber = this.paragraph[0].body.split('').length;
      this.loading = false; 
    })
  }

}
