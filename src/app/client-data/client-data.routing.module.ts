// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ClientDataComponent } from './components/client-data/client-data.component';
import { Step2Component } from './components/step2/step2.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'step_1',
        pathMatch: 'full'
    },
    {
        path: 'step_1',
        component: ClientDataComponent,
        data: {
            parent: 1,
            child: 1
        }
    },
    {
        path: 'step_2',
        component: Step2Component,
        data: {
            parent: 1,
            child: 2
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientDataRoutingModule { }