import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialSituationRoutingModule } from './financial-situation.routing.module';
import { FinancialSituationComponent } from './components/financial-situation/financial-situation.component';
import { TabsNavigationModule } from '../shared/tabs-navigation/tabs-navigation.module';

@NgModule({
  declarations: [FinancialSituationComponent],
  imports: [
    CommonModule,
    FinancialSituationRoutingModule,
    TabsNavigationModule
  ]
})
export class FinancialSituationModule { }
