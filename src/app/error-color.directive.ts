import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Error-color]'
})
export class ErrorColorDirective {

  constructor( _element : ElementRef) {

  _element.nativeElement.style.color = "red";

  }
}
