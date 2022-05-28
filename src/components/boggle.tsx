import Tile from './tile'
import { ApiService, JSONValue } from '../hooks/apiService';
import { useEffect, useState, useRef } from 'react';
import {v4 as uuid} from 'uuid';
import Form from './form';
import { useNavigate } from 'react-router-dom';


const Boggle = () => {
    const [board, setBoard] = useState([]);
    const api: ApiService = new ApiService();
    const [formData, setData] = useState({guess: ''})
    const scoreRef: any = useRef(0);
    const triesRef: any = useRef(0);
    const [isValid, setValid] = useState(true)
    let navigate = useNavigate();

    useEffect(() => {
        const getBoard: Function = async () => {
            const res: any = await api.getTiles();
            console.log('res from useEffect:', res)
            triesRef.current += 1;
            setBoard(board => res);
            console.log('board:', board)
        }

        const timer: Function = () => {
            setTimeout(() => navigate(`../gameover/${scoreRef.current}/${triesRef.current}`, { replace: true }), 60000)
        }

        getBoard();
        timer();
    }, [])

    const handleSubmit = () => {
        let word = formData.guess;
        
        const res: any = api.guessWord(word);
        if (res === 'ok') {
            setValid(true)
            scoreRef.current += word.length;
        } else setValid(false);
    }

    return (
        <section className='container mt-5'>
            <Form formData={formData} setData={setData} handleSubmit={handleSubmit} className="row" />

            <div className='row mt-4'>
                <table className='col-4 mx-lg-auto'>
                {board && board.map(
                    (row: Array<string>) => 
                        <tr>{row.map((cell: string) => 
                            <td>{<Tile letter={cell} key={uuid()} />}</td>)}
                        </tr>)}
                </table>
            </div>

            <div className='row mt-4 text-center'>
                <h2>Score: {scoreRef.current}</h2>
            </div>
            
        </section>
    )
}

export default Boggle;