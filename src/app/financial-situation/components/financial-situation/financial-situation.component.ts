import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-financial-situation',
  templateUrl: './financial-situation.component.html',
  styleUrls: ['./financial-situation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialSituationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave(cb): void {
    cb();
  }
}
