import axios from 'axios';

export type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

export class ApiService {
    constructor(){}

    async getTiles () {
        const res: JSONValue = await axios.get('/makeboard');
        console.log('makeboard response:',res);
        return res;
    }
}