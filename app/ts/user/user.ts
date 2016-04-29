import {ResultMsg} from './../result'
import {Channel} from './../channels/channel'

export class User {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    signUp() {
        console.log('Signing up user...' + this.email + '/' + this.password);
        // Some work with API
        return new ResultMsg(false, 'This email is already used');
    }

    signIn() {
        console.log('Signing in user...' + this.email + '/' + this.password);
        return new ResultMsg(true, 'Success');
    }

    getChannels() {
        let url: string = '';
        return [
            new Channel('BIV-131', 'Starosta@peaceduck.com', 'Some info for our group', '2016-04-27'),
            new Channel('Ntf inc.', 'thegorazio@gmail.com', 'Messages for ntf group', '2016-04-25')
        ].map(res => res.json());
    }
}