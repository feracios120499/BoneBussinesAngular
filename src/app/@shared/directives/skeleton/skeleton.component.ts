import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export interface SkeletonSizes {
  w?: string;
  h?: string;
  br?: string;
}

const SIZES: Required<SkeletonSizes> = {
  w: '100%',
  h: '100%',
  br: '4px',
};

@Component({
  template: '',
  styles: [
    `
      :host {
        overflow: hidden;
        position: relative;
        display: inline-block;
        min-height: 1.35em !important;
        padding: 2px;
        box-sizing: border-box;
        background: var(--color-light-300) !important;
        background-clip: content-box !important;
        animation: pulse 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        animation-delay: 0.5s;
        @media (prefers-reduced-motion: reduce) {
          animation: none;
        }
      }

      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.4;
        }
        to {
          opacity: 1;
        }
      }
    `,
  ],
  host: {
    class: 'pulse',
  },
})
export class SkeletonComponent implements OnInit {
  @Input() sizes: SkeletonSizes = SIZES;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const el: HTMLElement = this.elRef.nativeElement;
    this.renderer.setStyle(el, 'width', this.renderSizes.w);
    this.renderer.setStyle(el, 'height', this.renderSizes.h);
    this.renderer.setStyle(el, 'borderRadius', this.renderSizes.br);
  }

  private get renderSizes(): Required<SkeletonSizes> {
    return { ...SIZES, ...this.sizes };
  }
}
