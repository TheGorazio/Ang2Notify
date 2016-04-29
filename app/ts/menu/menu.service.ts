import {Injectable} from 'angular2/core'
import {MenuItem} from './item'

@Injectable()
export class MenuService {
    private items: Array<MenuItem> = [
        new MenuItem(1, 'Home', 'Notifeeder'),
        new MenuItem(2, 'Channels', 'Channels'),
        new MenuItem(3, 'Search', 'Search'),
        new MenuItem(4, 'Log out', 'LogOut')
    ];

    _getMenu() {
        return this.items;
    }

}