export class ResultMsg {
    _result: boolean;
    _message: string;

    constructor(result: boolean, message: string) {
        this._result = result;
        this._message = message;
    }
}