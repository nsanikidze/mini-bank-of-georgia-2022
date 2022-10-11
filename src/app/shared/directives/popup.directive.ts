import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {

  @HostBinding('class.active') isActive = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event']) onClick($event){
    this.isActive = this.elementRef.nativeElement.contains($event.target) ? !this.isActive : false;
  }



}
