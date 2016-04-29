import {Component} from 'angular2/core';

@Component({
    selector: 'my-page',
    templateUrl: '/app/ts/my-page/my-page.component.html'
})

export class MyPageComponent {
    public title: string = 'Hello, notifeeder';
}