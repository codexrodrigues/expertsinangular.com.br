import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  standalone: true,
  selector: '[appDestaque]',
})
export class DestaqueDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
