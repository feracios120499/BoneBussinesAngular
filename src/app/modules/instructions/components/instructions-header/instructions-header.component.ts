import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-instructions-header',
  templateUrl: './instructions-header.component.html',
  styleUrls: ['./instructions-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructionsHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
