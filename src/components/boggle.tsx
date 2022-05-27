import Tile from './tile'
import { ApiService, JSONValue } from '../hooks/apiService';
import { useEffect, useState } from 'react';

const Boggle = () => {
    const [board, setBoard]: Array<any> = useState([]);
    const api: ApiService = new ApiService();

    useEffect(() => {
        const res: Promise<JSONValue> = api.getTiles();
        setBoard((board: Promise<JSONValue>) => res);
    }, [])

    return (
        <Tile letter='L' />
    )
}

export default Boggle;