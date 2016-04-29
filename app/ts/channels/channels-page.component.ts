import {Component, Input} from 'angular2/core';
import {MenuComponent} from '../menu/menu.component';
import {Channel} from "./channel";

@Component({
    selector: 'channels-page',
    templateUrl: 'app/ts/channels/channels-page.component.html',
    directives: [MenuComponent]
})

export class ChannelsComponent {
    @Input('item') channel: Channel;
}