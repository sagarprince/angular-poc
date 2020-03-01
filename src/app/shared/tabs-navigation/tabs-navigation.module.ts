import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsNavigationComponent } from './tabs-navigation.component';



@NgModule({
  declarations: [TabsNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [TabsNavigationComponent]
})
export class TabsNavigationModule { }
