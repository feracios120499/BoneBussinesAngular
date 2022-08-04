import { Component, Input, OnInit } from '@angular/core';
import { withRequiredPropsCheck } from '@mixins/with-required-props-check.mixin';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-supdocument-item',
  templateUrl: './supdocument-item.component.html',
  styleUrls: ['./supdocument-item.component.scss'],
  host: {
    class: 'supdocument-item',
  }
})
export class SupdocumentItemComponent extends withRequiredPropsCheck() implements OnInit {
  @Input() supdocument!: SupDocument;

  constructor(private store: Store, private translateService: TranslateService) {
    super();
  }

  ngOnInit(): void {
    this.checkRequiredProps(['supdocument']);
  }
}
