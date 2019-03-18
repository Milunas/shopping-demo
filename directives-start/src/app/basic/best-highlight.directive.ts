import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[app-best-highlight]'
})
export class BestHighlightDirective implements OnInit{
    
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {}

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = 'orange'
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = 'purple';
    }

}