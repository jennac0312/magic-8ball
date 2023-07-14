import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import Button from './components/Button';

import responses from './models/responses';
import { useState } from 'react';

function App() {

  // state for response
  const [response, setResponse] = useState('')

  const randomResponse = () => {
    console.log('button clicked')

    setResponse(responses[getRandomIntInclusive(0, responses.length-1)])
    console.log(response)
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }


  return (
    <div className="App">
      < Header />
      < Message response={response}/>
      < Button randomResponse={randomResponse}/>
      
    </div>
  );
}

export default App;
