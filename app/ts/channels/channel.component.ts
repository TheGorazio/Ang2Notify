import {Component, Input, OnInit} from 'angular2/core';
import {Channel} from "./channel";

@Component({
    selector: 'channel',
    template:`
        <div class='channel'>
            <h1>{{channel._name}}</h1>
            <h2 *ngIf="false">{{channel._author}}</h2>
            <p>{{channel._posts}}</p>
            <p class="date">{{channel._date}}</p>
        </div>
    `,
    styleUrls: ['app/src/css/channel.css']
})

export class ChannelComponent implements OnInit{
    @Input('item') channel: Channel;

    ngOnInit():any {
        console.log('TTT% - ' + JSON.stringify(this.channel));
    }
}