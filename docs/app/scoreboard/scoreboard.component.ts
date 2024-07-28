import { Component, OnInit } from '@angular/core';
import { ModelScore } from 'src/app/shared/model/score/model-score';
import { PromiseService } from 'src/app/shared/service/promise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  constructor(public router : Router, public promise : PromiseService, public modelScore : ModelScore) { }

  public dataSource : any = [];

  public displayedColumns : any = [];

  public loading: boolean = true;

  ngOnInit(): void {
    this.loading = true;
    this.displayedColumns = this.modelScore.getScoreModel()['listScore'];
    let localScore = localStorage.getItem("listScore");
    if(localScore)
    {
      this.dataSource = JSON.parse(localScore);
    }
    this.loading = false;
  }

  public getLine(object : any)
  {
    console.log(object);
  }

  public navigation(url : string){
    this.router.navigate([url]);
  }
}
