import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'util';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') appInputFormat: any;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.appInputFormat === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
