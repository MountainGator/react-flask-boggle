import axios from 'axios';

export type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

export class ApiService {

    async getTiles () {
        const res: any = await axios.get('/makeboard');
        console.log('makeboard response:',res.data);
        return res.data;
    }

    async guessWord (guess: string) {
        try { 
            const res: any = await axios.post('http://localhost:5000/guess', JSON.stringify({guess: guess}));
            console.log('post response:',res);
            return res.data;
        } catch (e) {
            console.error(e)
            return
        }   
    }
}