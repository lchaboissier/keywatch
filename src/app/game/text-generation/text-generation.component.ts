import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { PromiseService } from 'src/app/shared/service/promise.service';

@Component({
  selector: 'app-text-generation',
  templateUrl: './text-generation.component.html',
  styleUrls: ['./text-generation.component.scss']
})
export class TextGenerationComponent implements OnInit {

  constructor(public promise: PromiseService) { }

  @Input() typedKey: any = '';

  
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  public loading: boolean = true;
  public initialized: boolean = false;

  public text: any = "";
  public words: any = "";
  public letters: any = "";

  public lineLimit: number = 35;
  public lines: any = [[]];

  public wordlength: any = [];

  public wordNumber: number = 0;
  public letterNumber: number = 0;

  public activeLineNumber: number = 0;
  public activeLine: any = [];

  public activeWordNumber: number = 0;
  public activeWord: string = '';

  public activeLetterNumber: number = 0;
  public activeLetter: string = '';

  public typingError: boolean = false;

  public marginTop: number = -15;
  public marginLeft: number = 0;
  public incrementLeft: number = 21;
  public incrementTop: number = 55;


  ngOnInit(): void {
    this.promise.getData().then(value => {
      this.text = value;
      this.text = this.text[this.getRandomInt(0, this.text.length)].body;
      this.letters = this.text.split('');
      this.words = this.text.replaceAll(/\n/g, ' ').split(' ');
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

      this.initialized = true;  
      this.loading = false;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      console.log(this.lines.length - 1, this.activeLineNumber)
      this.activeLine = this.lines[this.activeLineNumber];
      this.activeWord = this.activeLine[this.activeWordNumber];
      this.activeLetter = this.activeWord.split('')[this.activeLetterNumber];

      let lastWord = this.activeLine[this.activeLine.length - 1];
      let lastletter = lastWord.split('');
      lastletter = lastletter[lastletter.length - 1];

        if (this.activeWordNumber <= this.activeLine.length - 1) {
          if(this.activeLetterNumber < this.activeWord.length)
          {
            if (this.typedKey.key == this.activeLetter) {
              this.activeLetterNumber++;
              this.typingError = false;
              this.marginLeft += this.incrementLeft;
            }
            else if (this.typedKey.key != this.activeLetter) {
              this.typingError = true;
          }
          }
          else if (this.typedKey.key == ' ')
          {
            if (this.activeWord != lastWord)
            {
              this.activeWordNumber++;
              this.marginLeft += this.incrementLeft;
              this.activeLetterNumber = 0;
            } else if (this.activeWord == lastWord)
            {
              if (this.activeLine != this.lines.length)
              {
                console.log(this.activeLine, this.lines.length - 2)
                this.activeLineNumber++;
                this.activeWordNumber = 0;
                this.activeLetterNumber = 0;
                this.marginLeft = 0;
                this.marginTop += this.incrementTop;
              } else {
                console.log("terminer")
              }
            }
          }
        }
      }
    


  }

}
