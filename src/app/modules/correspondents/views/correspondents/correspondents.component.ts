import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-correspondents',
  templateUrl: './correspondents.component.html',
  styleUrls: ['./correspondents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorrespondentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
