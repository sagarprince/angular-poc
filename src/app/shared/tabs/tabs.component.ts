import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TabsService, Tab } from '../../services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
  public tabs: Array<Tab> = [];

  constructor(
    private cd: ChangeDetectorRef,
    private tabsService: TabsService
  ) { }

  ngOnInit() {
    this.tabs = this.tabsService.tabs;
  }

}
