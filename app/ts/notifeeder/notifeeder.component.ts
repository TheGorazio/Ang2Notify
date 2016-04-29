import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {CookieService} from 'angular2-cookie/core';
import {User} from "../user/user";
import {AppService} from '../app.service';
import {MenuComponent} from '../menu/menu.component';
import {MyPageComponent} from '../my-page/my-page.component';
import {ChannelsListComponent} from '../channels/channels-list.component'
import {Channel} from "../channels/channel";

@Component({
    selector: 'notifeeder',
    templateUrl: '/app/ts/notifeeder/notifeeder.component.html',
    directives: [MenuComponent, ChannelsListComponent],
    styleUrls: ['app/src/css/notifeeder.css'],
})

export class NotifeederComponent implements OnInit {

    public owner;
    public channels;

    constructor(private _appService: AppService, private _router: Router, private _cookieService: CookieService) {}

    ngOnInit():any  {
        this.owner = this._cookieService.getObject('user');
        this.channels = [
            new Channel('BIV-131', 'Starosta@peaceduck.com', 'Some info for our group', '2016-04-27'),
            new Channel('Ntf inc.', 'thegorazio@gmail.com', 'Messages for ntf group', '2016-04-25')
        ];
        console.log(JSON.stringify(this.channels));
    }
}