import { Directive, ElementRef, OnInit, Renderer2, HostListener} from "@angular/core";

@Directive({
    selector: '[app-better-highlight]'
})
export class BetterHighlightDirective implements OnInit{

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

}