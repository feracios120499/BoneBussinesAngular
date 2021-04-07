import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckStateDirective } from './directives/check-state.directive';

@NgModule({
    declarations: [CheckStateDirective],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule,
        NgbModule,

    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule,
        NgbModule,
        CheckStateDirective
    ]
})
export class SharedModule { }
