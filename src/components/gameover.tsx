import { useParams, Link } from "react-router-dom";

const GameOver = () => {

    let { score, tries } = useParams();

    return (
        <div className="container text-center">
            <div className="row">
                <h2>Game Over!</h2>
                <p>Your score was {score}</p>
                { tries === '1' && <p>You have tried {tries} time</p>}
                { tries !== '1' && <p>You have tried {tries} times</p>}
            </div>
            <div className="row justify-content-center">
                <Link to={'../game'}><button className="btn btn-outline-primary">New Game</button></Link>
            </div>
            
        </div>
        
    )
}

export default GameOver;