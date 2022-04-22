import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UiReissuApplication } from '@models/cards/ui-reissue-application.model';
import { Store } from '@ngrx/store';
import { ResizeService } from '@services/resize.service';
import { CardReissueActions } from '@store/cards/reissue/actions';
import { CardReissueSelectors } from '@store/cards/reissue/selectors';

@Component({
  selector: 'app-reissue-applications-list',
  templateUrl: './reissue-applications-list.component.html',
  styleUrls: ['./reissue-applications-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReissueApplicationsListComponent implements OnInit {
  constructor(private store: Store, private resizeService: ResizeService) {}

  applications$ = this.store.select(CardReissueSelectors.applications);
  isMobile$ = this.resizeService.isMobile$;
  ngOnInit(): void {
    console.log('init');
  }

  trackId(index: number, application: UiReissuApplication): string | undefined {
    return application ? `${application.id}.${index}` : undefined;
  }
}
