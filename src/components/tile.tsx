
const Tile = ({letter}: any) => {
    return (
    <div className="d-flex justify-content-center align-items-center tile">
        <span className="fs-1">{letter}</span>
    </div>
    )
}

export default Tile;