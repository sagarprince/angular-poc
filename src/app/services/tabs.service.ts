import { Injectable } from '@angular/core';

export interface TabStep {
  path: string;
  key: number;
  completed: boolean;
}

export interface Tab {
  path: string;
  name: string;
  key: number;
  children: Array<TabStep>;
}

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private _tabs: Array<Tab> = [];

  constructor() { 
    this._tabs = [
      {
        path: 'cd',
        name: 'Client Data',
        key: 1,
        children: [
          {
            path: 'step_1',
            key: 1,
            completed: false
          },
          {
            path: 'step_2',
            key: 2,
            completed: false
          }
        ]
      },
      {
        path: 'fs',
        name: 'Financial Situation',
        key: 2,
        children: [
          {
            path: '',
            key: 1,
            completed: false
          }
        ]
      },
      {
        path: 'dd',
        name: 'Data Data',
        key: 3,
        children: [
          {
            path: 'step_1',
            key: 1,
            completed: false
          },
          {
            path: 'step_2',
            key: 2,
            completed: false
          }
        ]
      },
    ]
  }

  public get tabs(): Array<Tab> {
    return this._tabs;
  }

  
}
