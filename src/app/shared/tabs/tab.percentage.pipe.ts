import { Pipe, PipeTransform } from '@angular/core';
import { Tab } from '../../services/tabs.service';

@Pipe({ name: 'tabPercentage' })
export class TabPercentagePipe implements PipeTransform {
    transform(value: Tab): number {
        let children = value.children;
        let completedSteps = children.filter((x) => x.completed);
        return (completedSteps.length / children.length) * 100;
    }
}