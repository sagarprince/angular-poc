import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientDataRoutingModule } from './client-data.routing.module';
import { ClientDataComponent } from './components/client-data/client-data.component';
import { Step2Component } from './components/step2/step2.component';
import { TabsNavigationModule } from '../shared/tabs-navigation/tabs-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    ClientDataRoutingModule,
    ReactiveFormsModule,
    TabsNavigationModule
  ],
  declarations: [ClientDataComponent, Step2Component]
})
export class ClientDataModule { }
