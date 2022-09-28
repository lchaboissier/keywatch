import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  public navigation(url : string){
    this.router.navigate([url]);
  }
}