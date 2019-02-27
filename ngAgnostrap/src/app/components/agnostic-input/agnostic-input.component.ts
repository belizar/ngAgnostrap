import { Field } from './../../models/field';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agnostic-input',
  templateUrl: './agnostic-input.component.html',
  styles: []
})
export class AgnosticInputComponent implements OnInit {

  @Input() field: Field;
  @Output() blur = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onBlur() {
    this.blur.emit();
  }

}
