import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {NotifeederComponent} from './notifeeder/notifeeder.component'
import {AuthenticatorComponent} from './authenticator/authenticator.component'
import {ChannelsComponent} from './channels/channels-page.component'
import {SearchComponent} from './search/search.component'
import {AppService} from './app.service'
import {ChannelComponent} from "./channels/channel.component";

@Component({
    selector: 'my-app',
    templateUrl: '/app/ts/main.html',
    directives: [AuthenticatorComponent, NotifeederComponent, ROUTER_DIRECTIVES, SearchComponent, ChannelsComponent],
})

@RouteConfig([
    {path: '/auth', name: 'Authentication', component: AuthenticatorComponent, useAsDefault: true},
    {path: '/my_notifeeder', name: 'Notifeeder', component: NotifeederComponent},
    {path: '/search', name: 'Search', component: SearchComponent},
    {path: '/channels', name: 'Channels', component: ChannelsComponent},
    {path: '/channels/:channelName', name: 'Channel', component: ChannelComponent}

])
export class AppComponent {

    constructor(private appService: AppService) {}

    public user = this.appService.getUser();

    public getInfo() {
        console.log(this.appService.getUser());
    }

}
