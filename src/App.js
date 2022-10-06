import React, { useEffect, useState } from 'react';
import '../src/styles/App.css';
import Card from '../src/components/card';
import '../src/styles/App.css';
import naruto from '../src/assets/naruto.png';
import asuma from '../src/assets/asuma.png';
import ino from '../src/assets/ino.png';
import kakazu from '../src/assets/kakazu.png';
import sasuke from '../src/assets/sasuke.png';
import chouji from '../src/assets/chouji.png';
import jiraiya from '../src/assets/jiraiya.png';
import kiba from '../src/assets/kiba.png';
import rocklee from '../src/assets/rock-lee.png';
import shino from '../src/assets/shino.png';
import gaara from '../src/assets/gaara.png';
import kakashi from '../src/assets/kakashi.png';
import minato from '../src/assets/minato.png';
import sakura from '../src/assets/sakura.png';
import tobi from '../src/assets/tobi.png';
import uniqid from 'uniqid';

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

function App() {

    const [ images, setImages ] = useState(initialPictureOrder);
    const [counter, setCounter] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [showScore, setShowScore] = useState('none');

    function handleClick(index) {
        const newList = [...images]; 
        newList.sort(() => Math.random() - 0.5);

        newList[index].isClick = !newList[index].isClick;

        if (!newList[index].isClick && counter < 14) {
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
        
    }

    useEffect(() => {
        if (bestScore > 0) {
            setShowScore('flex');
        }
        }, [bestScore]);

  return (
    <div className='App'>
        <div style={{
        display: showScore,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
         <h3>Your Best Score: {bestScore}</h3>
         <button type="button" onClick={() => setShowScore('none')}>Play again</button>
        </div>
    <Card images={images} counter={counter} bestScore={bestScore} handleClick={handleClick}/>
  </div>
  );
}

export default App;
