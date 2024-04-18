import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFondoVerdeClick]',
  standalone: true
})
export class FondoVerdeClickDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') onClick() {
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'green';
  }

}
