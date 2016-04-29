import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router'
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {CookieService} from 'angular2-cookie/core';
import 'rxjs/add/operator/map'

bootstrap(AppComponent, [ROUTER_PROVIDERS, AppService, CookieService]);
