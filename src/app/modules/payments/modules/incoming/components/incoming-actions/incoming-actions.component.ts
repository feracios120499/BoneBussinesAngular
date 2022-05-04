import { Component, OnInit } from '@angular/core';
import { DateRange } from '@models/date-range.model';
import dayjs, { Dayjs } from 'dayjs';

@Component({
  selector: 'app-incoming-actions',
  templateUrl: './incoming-actions.component.html',
  styleUrls: ['./incoming-actions.component.scss'],
})
export class IncomingActionsComponent implements OnInit {
  constructor() {}

  range: DateRange = {
    start: dayjs(),
    end: dayjs(),
  };

  ranges: any = {
    'shared.picker.today': [dayjs(), dayjs()],
    'shared.picker.currentMonth': [dayjs().startOf('month'), dayjs()],
    'shared.picker.month1': [dayjs().subtract(1, 'month'), dayjs()],
  };
  ngOnInit(): void {}
}
