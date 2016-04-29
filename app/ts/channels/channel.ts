import {Message} from "../message";

export class Channel {

    constructor(public _name: string, public _author: string, public _posts: string, public _date: string) {};

    json() {
        return this;
    }
}