
import React, { useEffect, useState } from 'react';
import naruto from '../components/assets/naruto.png';
import asuma from '../components/assets/asuma.png';
import ino from '../components/assets/ino.png';
import kakazu from '../components/assets/kakazu.png';
import sasuke from '../components/assets/sasuke.png';
import chouji from '../components/assets/chouji.png';
import jiraiya from '../components/assets/jiraiya.png';
import kiba from '../components/assets/kiba.png';
import rocklee from '../components/assets/rock-lee.png';
import shino from '../components/assets/shino.png';
import gaara from '../components/assets/gaara.png';
import kakashi from '../components/assets/kakashi.png';
import minato from '../components/assets/minato.png';
import sakura from '../components/assets/sakura.png';
import tobi from '../components/assets/tobi.png';
import uniqid from 'uniqid';

const nameArrays = [];
const isClick = true;
const initialPictureOrder = [
    {
        name: 'Naruto',
        src: naruto,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Asuma',
        src: asuma,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Ino',
        src: ino,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Kakazu',
        src: kakazu,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Sasuke',
        src: sasuke,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Chouji',
        src: chouji,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Jiraiya',
        src: jiraiya,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Kiba',
        src: kiba,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Rock-lee',
        src: rocklee,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Shino',
        src: shino,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Gaara',
        src: gaara,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Kakashi',
        src: kakashi,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Minato',
        src: minato,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Sakura',
        src: sakura,
        id: uniqid(),
        isClick: true,
    },
    {
        name: 'Tobi',
        src: tobi,
        id: uniqid(),
        isClick: true,
    },
    
  
  ]

const Card = () => {
    const [ images, setImages ] = useState(initialPictureOrder);
    const [counter, setCounter] = useState(0);
    const [bestScore, setBestScore] = useState(0);


    function handleClick(index) {
        const newList = [...images]; 
        newList[index].isClick = !newList[index].isClick;

        if (!newList[index].isClick) {
            setCounter(counter + 1);
            console.log(newList[index].isClick);
        } else {
            if(counter > bestScore) {
                setBestScore(counter);
            }
            setCounter(0);
        }

        newList.sort(() => Math.random() - 0.5);
        setImages(newList);
        console.log(newList); 
    }



    
    return (
    <div>
        <span>{counter}</span>
        <span>BestScore: {bestScore}</span>
        <div className="card-grid">
        {images.map((image, i) => (
    <div key={image.id}  style={{backgroundImage: `url(${image.src})`, backgroundColor: 'blue',}} onClick={() => handleClick(i)}></div>
    ))}
    </div>
    </div>
    );
    }

export default Card;
const array = [1,2,3,4,5,6,7,8,9,10];
const array1 = array.sort(() => Math.random() - 0.5);

console.log(array1);
