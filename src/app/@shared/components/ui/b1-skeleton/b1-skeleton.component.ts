import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'b1-skeleton',
  templateUrl: './b1-skeleton.component.html',
  styleUrls: ['./b1-skeleton.component.scss'],
})
export class B1SkeletonComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'pulse');
  }
}
