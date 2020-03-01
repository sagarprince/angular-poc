import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { TabPercentagePipe } from './tab.percentage.pipe';
import { TabProgressModule } from '../tab-progress/tab-progress.module';
import { DisableLinkDirective } from './disable.link.directive';

@NgModule({
  declarations: [TabsComponent, TabPercentagePipe, DisableLinkDirective],
  imports: [
    CommonModule,
    RouterModule,
    TabProgressModule
  ],
  exports: [TabsComponent]
})
export class TabsModule { }
