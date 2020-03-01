import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsService, Tab } from '../../services/tabs.service';

@Component({
  selector: 'app-tabs-navigation',
  templateUrl: './tabs-navigation.component.html',
  styleUrls: ['./tabs-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsNavigationComponent implements OnInit {
  @Input() isNextDisabled: boolean = false;
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  public tabs: Array<Tab> = [];
  private currentTab: Tab;
  private currentTabIndex: number;
  private currentTabChildIndex: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tabsService: TabsService
  ) { }

  ngOnInit() {
    this.tabs = this.tabsService.tabs;
    this.route.data.subscribe((data) => {
      const parent = data.parent;
      const child = data.child;
      this.currentTab = this.tabs.find((x) => x.key === parent);
      this.currentTabIndex = this.tabs.findIndex((x) => x.key === parent);
      this.currentTabChildIndex = this.currentTab.children.findIndex((x) => x.key === child);
    });
  }

  onNextCallback(): void {
    const children = this.currentTab.children;
    const len = children.length;
    if (this.currentTabChildIndex < (len - 1)) {
      const path = children[this.currentTabChildIndex + 1].path;
      this.router.navigate([path], { relativeTo: this.route.parent });
    } else if (this.currentTabIndex < (this.tabs.length - 1)) {
      const nextTab = this.tabs[this.currentTabIndex + 1];
      this.router.navigate([nextTab.path]);
    }
  }

  next(): void {
    this.onNext.emit(this.onNextCallback.bind(this));
  }

  back(): void {
    const children = this.currentTab.children;
    if (this.currentTabChildIndex > 0) {
      const path = children[this.currentTabChildIndex - 1].path;
      this.router.navigate([path], { relativeTo: this.route.parent });
    } else if (this.currentTabChildIndex === 0 && this.currentTabIndex > 0) {
      const prevTab = this.tabs[this.currentTabIndex - 1];
      const prevTabChild = prevTab.children[prevTab.children.length - 1];
      this.router.navigate([prevTab.path + '/' + prevTabChild.path]);
    } else {
      console.log('Navigate to Welcome');
    }
  }
}
