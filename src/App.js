import React, { useEffect, useRef , useState } from 'react';
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
    


  return (
    <div className='App'>
    <Card/>
  </div>
  );
}

export default App;
