import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-correspondents-header',
  templateUrl: './correspondents-header.component.html',
  styleUrls: ['./correspondents-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorrespondentsHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
