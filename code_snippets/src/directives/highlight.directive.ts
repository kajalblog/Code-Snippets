import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef,private renderer: Renderer2) {

  }
  @Input() showMsg: boolean=false;

  @HostBinding('style.backgroundColor')

  bgColor = 'purple';
  @HostListener('click')
  changeFontSize() {
    console.log("font chnaged");
    this.el.nativeElement.style.fontSize="50px"
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    this.showMsg=true;

  }
  @HostListener('mouseleave')
  resetFontSize() {
    console.log("font re chnaged");
    this.el.nativeElement.style.fontSize="15px"
  }

}
