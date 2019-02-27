import { Field } from './models/field';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngAgnostrap';
  field: Field;
  ngOnInit(): void {
    this.field = new Field();
    this.field.type = 'input';
    this.field.value = 'Esto es un valor';
    this.field.name = 'Input';
    this.field.label = 'Label del input';
    this.field.disabled = false;
    this.field.readonly = false;
  }
}
