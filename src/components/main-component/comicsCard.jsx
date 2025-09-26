
const ComicsCard = (props) => {

    return (
        <div className="card">
            <div className="card-img">
                <img src={props.thumb} alt={props.series} />
            </div>
            <span>{props.series}</span>
        </div>
    )
}

export default ComicsCard