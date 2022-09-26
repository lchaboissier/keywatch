import { Component, Input, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { PromiseService } from 'src/app/shared/service/promise.service';

@Component({
  selector: 'app-text-generation',
  templateUrl: './text-generation.component.html',
  styleUrls: ['./text-generation.component.scss']
})
export class TextGenerationComponent implements OnInit {

  constructor(public promise: PromiseService) { }

  @Input() typedLetter = '';

  public loading: boolean = true;
  public text: any = "";
  public words: any = "";
  public letters: any = "";

  public lineLimit: number = 35;
  public lines: any = [[]];

  public wordlength: any = [];

  public wordNumber: number = 0;
  public letterNumber: number = 0;
  public active: number = 0;


  ngOnInit(): void {
    this.promise.getData().then(value => {
      
      this.text = value;
      this.letters = this.text[0].body.split('');
      this.words = this.text[0].body.replaceAll(/\n/g, ' ').split(' ');
      this.wordNumber = this.words.length;
      this.wordlength = this.wordlength.map((word: string, index: number) => this.wordNumber - 1 == index ? word.length : word.length + 1);
      this.words.map((word: string) => {
        if ((this.lines[this.lines.length - 1].join('').length + word.length) >= this.lineLimit)
          {
            this.lines[this.lines.length] = [word];
          } else {
            this.lines[this.lines.length - 1].push(word);
          }
        }
        );

        console.log(this.lines);

      this.loading = false;
    })
  }

}
