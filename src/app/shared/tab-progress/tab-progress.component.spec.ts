import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProgressComponent } from './tab-progress.component';

describe('TabProgressComponent', () => {
  let component: TabProgressComponent;
  let fixture: ComponentFixture<TabProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
