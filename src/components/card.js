
const Card = (props) => {  
    return (
    <div>
        <div className="card-grid">
        {props.images.map((image, i) => (
    <div className="card" key={image.id}  style={{backgroundColor: 'transparent', paddingLeft: '20px', paddingRight: '20px', cursor: 'pointer'}} onClick={() => props.handleClick(i)}>
        <div className="image-wrapper" style={{backgroundImage: `url(${image.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '80%'}}>
            </div>
            <h5>{image.name}</h5>
    </div>
    ))}
    </div>
    </div>
    );
    }

export default Card;
