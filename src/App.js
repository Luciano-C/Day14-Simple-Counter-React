/* import logo from './logo.svg'; */
import './App.css';
import React, { useState } from 'react';

const SimpleCounter = (props) => {

  const [count, setCount] = useState(0);
  React.useEffect(() => {
    const timer = window.setInterval(() => { setCount(prevCount => prevCount + 1); }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, [])


  let stringTimer = count.toString();
  let digitos = {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
    d6: 0
  };

  switch (true) {
    case stringTimer.length === 1:
      digitos.d1 = stringTimer[0]
      break;
    case stringTimer.length === 2:
      digitos.d1 = stringTimer[1];
      digitos.d2 = stringTimer[0];
      break;
    case stringTimer.length === 3:
      digitos.d1 = stringTimer[2];
      digitos.d2 = stringTimer[1];
      digitos.d3 = stringTimer[0];
      break;

    case stringTimer.length === 4:
      digitos.d1 = stringTimer[3];
      digitos.d2 = stringTimer[2];
      digitos.d3 = stringTimer[1];
      digitos.d4 = stringTimer[0];
      break;

    case stringTimer.length === 5:
      digitos.d1 = stringTimer[4];
      digitos.d2 = stringTimer[3];
      digitos.d3 = stringTimer[2];
      digitos.d4 = stringTimer[1];
      digitos.d5 = stringTimer[0];
      break;
    case stringTimer.length === 6:
      digitos.d1 = stringTimer[5];
      digitos.d2 = stringTimer[4];
      digitos.d3 = stringTimer[3];
      digitos.d4 = stringTimer[2];
      digitos.d5 = stringTimer[1];
      digitos.d6 = stringTimer[0];
      break;
    default:
      digitos.d1 = 9;
      digitos.d2 = 9;
      digitos.d3 = 9;
      digitos.d4 = 9;
      digitos.d5 = 9;
      digitos.d6 = 9;
  };


  return (
    <div className='container'>
      <div className='clockImg flex-item'><i class="fa-regular fa-clock"></i></div>
      <div className='digito6 flex-item'>{digitos.d6}</div>
      <div className='digito5 flex-item'>{digitos.d5}</div>
      <div className='digito4 flex-item'>{digitos.d4}</div>
      <div className='digito3 flex-item'>{digitos.d3}</div>
      <div className='digito2 flex-item'>{digitos.d2}</div>
      <div className='digito1 flex-item'>{digitos.d1}</div>
    </div>
  );
};




function App() {
  return (
    <SimpleCounter />
  )
}

export default App;
