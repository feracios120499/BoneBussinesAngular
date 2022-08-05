import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supdocuments-header',
  templateUrl: './supdocuments-header.component.html',
  styleUrls: ['./supdocuments-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupdocumentsHeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
