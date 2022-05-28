import Tile from './tile'
import { ApiService, JSONValue } from '../hooks/apiService';
import { useEffect, useState, useRef } from 'react';
import {v4 as uuid} from 'uuid';
import Form from './form';


const Boggle = () => {
    const [board, setBoard] = useState([]);
    const api: ApiService = new ApiService();
    const [formData, setData] = useState({guess: ''})
    const scoreRef: any = useRef();
    const [isValid, setValid] = useState(true)

    useEffect(() => {
        const getBoard: Function = async () => {
            const res: any = await api.getTiles();
            console.log('res from useEffect:', res)
            setBoard(board => res);
            console.log('board:', board)
        }
        getBoard()
    }, [])

    useEffect(() => {
        let word = formData.guess;
        const tryWord: Function = (): void => {
            const res: any = api.guessWord(word);
            if (res === 'ok') {
                setValid(true)
                scoreRef.current += word.length;
            } else setValid(false);
        }
        tryWord();
    }, [formData])

    return (
        <section className='container mt-5'>
            <Form formData={formData} setData={setData} />
            <table>
            {board && board.map(
                (row: Array<string>) => 
                    <tr>{row.map((cell: string) => 
                        <td>{<Tile letter={cell} key={uuid()} />}</td>)}
                    </tr>)}
            </table>
        </section>
    )
}

export default Boggle;