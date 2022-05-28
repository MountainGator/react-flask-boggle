import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome</h1>
            <p>Click to start the game</p>
            <Link to="game"><button className="btn btn-outline-success">Start</button></Link> 
        </div>
    )
}

export default Home;