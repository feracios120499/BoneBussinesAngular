import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'instructions',
  },
})
export class InstructionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
