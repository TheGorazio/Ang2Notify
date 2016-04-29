import {Component} from 'angular2/core';
import {MenuComponent} from '../menu/menu.component';

@Component({
    selector: 'search',
    templateUrl: '/app/ts/search/search.component.html',
    directives: [MenuComponent]
})

export class SearchComponent {
    public title = 'Search'
}