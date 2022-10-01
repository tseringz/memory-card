import React, { useEffect, useState } from 'react';

function Card (props) {

    return (
        <div className="card-grid">
            {props.images.map((image) => {
                return <div key={image.id} name={image.id} style={{backgroundColor: 'blue', cursor: 'pointer', backgroundImage: `url(${image.src})`}}></div>
            })}
        </div>

    );
}

export default Card;


const array = [1,2,3,4,5,6,7,8,9,10];
const array1 = array.sort(() => Math.random() - 0.5);

console.log(array1);