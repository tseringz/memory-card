import React, { useEffect, useState } from 'react';
import '../src/styles/App.css';
import Card from '../src/components/card';
import '../src/styles/App.css';
import naruto from '../src/assets/naruto.png';
import asuma from '../src/assets/asuma.png';
import uniqid from 'uniqid';

const initialPictureOrder = [
  {
      name: 'naruto',
      src: naruto,
      id: uniqid(),
  },
  {
      name: 'asuma',
      src: asuma,
      id: uniqid(),
  },
  {
      name: 'naruto',
      src: naruto,
      id: uniqid(),
  },
  {
      name: 'asuma',
      src: asuma,
      id: uniqid(),
  },
  {
      name: 'naruto',
      src: naruto,
      id: uniqid(),
  },
  {
      name: 'asuma',
      src: asuma,
      id: uniqid(),
  },
  {
      name: 'naruto',
      src: naruto,
      id: uniqid(),
  },
  {
      name: 'asuma',
      src: asuma,
      id: uniqid(),
  },
  {
      name: 'naruto',
      src: naruto,
      id: uniqid(),
  },
  {
      name: 'asuma',
      src: asuma,
      id: uniqid(),
  },
  {
      name: 'naruto',
      src: naruto,
      id: uniqid(),
  },
  {
      name: 'asuma',
      src: asuma,
      id: uniqid(),
  },
  {
      name: 'naruto',
      src: naruto,
      id: uniqid(),
  },
  {
      name: 'asuma',
      src: asuma,
      id: uniqid(),
  },
  {
      name: 'naruto',
      src: naruto,
      id: uniqid(),
  },
  

]

function App() {
  const [ images, setImages ] = useState(initialPictureOrder);
  const [counter, setCounter] = useState(0);

 useEffect(() => {
        const changePositionOnClick = () => {
            const newList = [...images];
            const idTrakerArray = [];
            newList.sort(() => Math.random() - 0.5);
            setImages(newList);

            setCounter(counter + 1);
            console.log(newList);
        }

        document.addEventListener('click', changePositionOnClick);

        return () => {
            document.removeEventListener('click', changePositionOnClick);
        }

    }, [images, counter]);

  return (
    <div className='App'>
      <span>{counter}</span>
    <Card images={images} />
  </div>
  );
}

export default App;
