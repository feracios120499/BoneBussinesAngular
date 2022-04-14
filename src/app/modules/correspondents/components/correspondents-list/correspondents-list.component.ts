import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-correspondents-list',
  templateUrl: './correspondents-list.component.html',
  styleUrls: ['./correspondents-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorrespondentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
