import {Component, Input, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Channel} from "./channel";
import {ChannelComponent} from './channel.component'

@Component({
    selector: 'channels-list',
    templateUrl: 'app/ts/channels/channels-list.component.html',
    directives: [ChannelComponent]
})

export class ChannelsListComponent implements OnInit{
    @Input('channels') channels: Channel[];

    constructor(private _router: Router) {}

    ngOnInit():any {
        console.log(JSON.stringify(this.channels));
    }

    onChannelSelect(_channel: Channel) {
        this._router.navigate([]);
    }
}
