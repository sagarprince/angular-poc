// Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { FinancialSituationComponent } from './components/financial-situation/financial-situation.component';

const routes: Routes = [
    {
        path: '',
        component: FinancialSituationComponent,
        data: {
            parent: 2,
            child: 1
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FinancialSituationRoutingModule { }