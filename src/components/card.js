
const Card = (props) => {

    return (
    <div>
        <span>{props.counter}</span>
        <span>BestScore: {props.bestScore}</span>
        <div className="card-grid">
        {props.images.map((image, i) => (
    <div key={image.id}  style={{backgroundImage: `url(${image.src})`, backgroundColor: 'blue',}} onClick={() => props.handleClick(i)}></div>
    ))}
    </div>
    </div>
    );
    }

export default Card;
