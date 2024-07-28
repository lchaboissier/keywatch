import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataSource = [];
  @Input() displayedColumns = [];

  @Output() lineObject = new EventEmitter<any>();

  public showColumn : any [] = [];

  constructor(public router : Router) { }

  ngOnInit(): void {
    this.showColumn = this.displayedColumns.map(element => element['column'])
    console.log(this.showColumn);
  }

  public getLine(object:any){
    this.lineObject.emit(object);
  }
}
