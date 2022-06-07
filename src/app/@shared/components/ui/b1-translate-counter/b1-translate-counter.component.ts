import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b1-translate-counter',
  templateUrl: './b1-translate-counter.component.html',
  styleUrls: ['./b1-translate-counter.component.scss'],
})
export class B1TranslateCounterComponent implements OnInit {
  @Input() count!: number;
  @Input() prefix!: string;

  get counter(): string {
    if (this.count > 4 && this.count < 21) {
      return '2';
    }
    const countStr = this.count.toString();
    const lastChar = countStr.substring(countStr.length - 1, countStr.length);

    switch (lastChar) {
      case '0':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        return '2';
      case '1':
        return '1';
      case '2':
      case '3':
      case '4':
        return '3';
      default:
        return '';
    }
  }
  ngOnInit(): void {}
}
