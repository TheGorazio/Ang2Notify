import {Component} from 'angular2/core'
import {OnInit} from 'angular2/core'
import {Router} from 'angular2/router'
import {User} from '../user/user'
import {AppService} from '../app.service'
import {CookieService} from 'angular2-cookie/core';


@Component({
    selector: 'authenticator',
    templateUrl: '/app/ts/authenticator/authenticator.component.html',
    styleUrls: ['app/src/css/authentication.css']
})

export class AuthenticatorComponent implements OnInit{

    public errorMsg = '';
    public user: User;
    public confirm_password;
    private state = 'SIGN_IN';

    constructor(private _appService: AppService, private _router: Router, private _cookieService: CookieService) {}

    onSubmit() {
        if (this.state == 'SIGN_IN') {
            this.onSignIn(this.user.email, this.user.password);
        }
        if (this.state == 'SIGN_UP') {
            if (this.user.password == this.confirm_password) {
                this.onSignUp(this.user.email, this.user.password);
            } else {
                this.errorMsg = 'Passwords are not matched'
            }
        }
    }
    onSignIn(email, password) {
        let user = new User(email, password);
        let s = user.signIn();
        if (s) {
            this._appService.setUser(user);
            this._cookieService.putObject('user', user);
            this._router.navigate(['Notifeeder']);
        } else {
            this.errorMsg = s._message;
        }

    }

    _onSignUp() {
        this.state = 'SIGN_UP';
    }

    onSignUp(email, password) {
        let user = new User(email, password);
        let s = user.signUp();
        if (s) {
            this._appService.setUser(user);
            this._router.navigate(['Notifeeder']);
        } else {
            this.errorMsg = s._message;
        }
    }


    ngOnInit():any {
        this.user = new User('','');
    }
}