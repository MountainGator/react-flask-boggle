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

    const getBoard: Function = async () => {
        const res: any = await api.getTiles();
        console.log('res from useEffect:', res)
        const setTries: any = api.setNumTries();
        setBoard(res);
        console.log('board:', board)
    }

    const timer: Function = () => {
        setTimeout(() => navigate(`../gameover/${scoreRef.current}/${triesRef.current}`, { replace: true }), 60000)
    }

    useEffect(() => {
        getBoard();
        timer();
    }, []);

    const handleSubmit = () => {
        let word = formData.guess;
        console.log('word:', word);
        const res: any = api.guessWord(word);
        const triesRes: any = api.getNumTries();
        console.log('number of tries', triesRes)
        if (res === 'OK') {
            setValid(true)
            scoreRef.current += word.length;
        } else setValid(false);

        setData({guess: ''})
    }

    return (
        <section className='container mt-5'>
            <Form formData={formData} setData={setData} handleSubmit={handleSubmit} className="row" />

            <div className='row mt-4'>
                <table className='col-3 mx-lg-auto'>
                    <tbody>
                        {board && board.map(
                        (row: Array<string>) => 
                            <tr>{row.map((cell: string) => 
                                <td>{<Tile letter={cell} key={uuid()} />}</td>)}
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='row mt-4 text-center'>
                <h2>Score: {scoreRef.current}</h2>
                {!isValid && <p className='text-danger'>Word not found in dictionary</p>}
            </div>
            
        </section>
    )
}

export default Boggle;