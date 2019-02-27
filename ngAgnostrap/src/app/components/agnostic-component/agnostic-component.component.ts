import { AgnosticInputComponent } from './../agnostic-input/agnostic-input.component';
import { Field, TYPE_INPUT } from './../../models/field';
import { Component, OnInit, forwardRef, ViewChild, ViewContainerRef, Input, ComponentFactoryResolver, EventEmitter,  } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ComponentRef } from '@angular/core/src/render3';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-agnostic-component',
  templateUrl: './agnostic-component.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AgnosticComponent),
      multi: true,
    }
  ]
})
export class AgnosticComponent implements OnInit, ControlValueAccessor {

  @ViewChild('templateComponent', {read: ViewContainerRef}) container: ViewContainerRef;
  @Input() class: string;
  _field: Field;
  propagateChange: any;
  propagateTouched: any;
  disabled: boolean;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  writeValue(obj: Field): void {
    this._field = obj;
    this.init(this._field);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private init(field: Field) {
    if((!field) || field && Object.keys(field).length === 0) return;
    let factory = null;
    this.container.clear();
    console.log(field);
    if (field.type === TYPE_INPUT) {
      factory = this.resolver.resolveComponentFactory(AgnosticInputComponent);
    }

    const component = this.container.createComponent(factory);
    component.instance['field'] = field;
    (component.instance['blur'] as EventEmitter<any>).subscribe(x => console.log('blur'));
  }


}
