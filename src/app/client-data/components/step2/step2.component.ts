import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSave(cb): void {
    cb();
  }

}
