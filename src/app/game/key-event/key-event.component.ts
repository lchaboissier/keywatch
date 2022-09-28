import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HostListener } from '@angular/core';

import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-key-event',
  templateUrl: './key-event.component.html',
  styleUrls: ['./key-event.component.scss']
})
export class KeyEventComponent implements OnInit {

  public key : any;

  @Output() keyPress = new EventEmitter();

  constructor(private location: LocationStrategy) {
    history.pushState(null, '', window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, '', window.location.href);
    });
  }

  ngOnInit(): void {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyPress.emit(event);
  }

  }
