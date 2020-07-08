import { Directive, OnInit, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundHighlight]'
})
export class BackgroundHighlightDirective {

  constructor(public elementRef: ElementRef) { }
@Input('appBackgroundHighlight') appBackgroundHighlight : string;

  @HostListener('mouseenter') mouseIn() {
    this.elementRef.nativeElement.style.backgroundColor = this.appBackgroundHighlight
  }


  @HostListener('mouseleave') mouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = ''
  }
}
