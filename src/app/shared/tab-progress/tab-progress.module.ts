import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TabProgressComponent } from './tab-progress.component';



@NgModule({
  declarations: [TabProgressComponent],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [TabProgressComponent]
})
export class TabProgressModule { }
