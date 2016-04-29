import {Injectable} from 'angular2/core'
import {User} from '../user'

@Injectable()
export class AppService {
    currentUser: User = null;
    currentPage: string;

    setUser(user: User) {
        this.currentUser = user;
    }

    getUser() :User {
        return this.currentUser;
    }

    setPage(page: String) {
        this.currentPage = page;
    }

    getPage() :string {
        return this.currentPage;
    }

}