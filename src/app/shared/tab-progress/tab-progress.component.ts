import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tab-progress',
  templateUrl: './tab-progress.component.html',
  styleUrls: ['./tab-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabProgressComponent implements OnInit {
  @Input() percentage: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
