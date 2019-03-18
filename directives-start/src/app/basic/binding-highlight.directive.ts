import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input} from "@angular/core";

@Directive({
    selector: '[app-binding-highlight]'
})
export class BindingHighlightDirective implements OnInit{

    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';

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