import {Component} from 'angular2/core';
import {CookieService} from 'angular2-cookie/core';
import {Router} from 'angular2/router';
import {MenuItem} from './item';
import {MenuService} from './menu.service';
import {AppService} from '../app.service';

@Component({
    selector: 'menu',
    templateUrl: 'app/ts/menu/menu.component.html',
    styleUrls: ['app/src/css/menu.css'],
    directives: [],
    providers: [MenuService]
})

export class MenuComponent {

    constructor(private _router: Router, private _menuService: MenuService,
                private _appService: AppService, private _cookieService: CookieService) {}

    public menu: Array<MenuItem> = this._menuService._getMenu();

    public selectedItem = {};

    onSelect(item: MenuItem) {
        console.log('Select ' + item.href);
        if (item.href === 'LogOut') {
            this._cookieService.remove('user');
            this._router.navigate(['Authentication']);
        } else {
            this.selectedItem = item;
            this._appService.setPage(item.href);
            this._router.navigate([item.href]);
        }
    }
}