import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGatoBotas]',
  standalone: true
})
export class GatoBotasDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
      const textoOriginal: string | null = (this.el.nativeElement as HTMLElement).textContent;
      if (!textoOriginal || textoOriginal.trim() === '') {
        return
      }

      const textoCambiado: string = textoOriginal.replaceAll('s', 'z').replaceAll('S', 'Z');
      (this.el.nativeElement as HTMLElement).textContent = textoCambiado;
  }

}
