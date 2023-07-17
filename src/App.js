import './App.css';
import Header from './components/Header';
import Message from './components/Message';
import Button from './components/Button';
import List from './components/List';

import responses from './models/responses';
import { useEffect, useState } from 'react';

function App() {

  // state for response
  const [response, setResponse] = useState(responses[getRandomIntInclusive(0, responses.length-1)]) //grab random response

  // to see if i understand useEffect or not
  const [previousRespone, setPreviousResponse] = useState('') //will always have value from useEffect bc it always runs on page load...

  // for list of responses
  const [allResponses, setAllResponses] = useState([])

  //track button clicks (bc i noticed sometimes the response message doesnt update after a button click. i suspect its bc the response sometimes is the same)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setAllResponses([...allResponses, response])
    return() => {
      console.log(allResponses)
    }
  }, [count]) //doesnt trigger reload if coincidentally randonNum is the same twice in a row.... is there a way to prevent this from running every reload??

  const randomResponse = () => {

    console.log('button clicked')
    setResponse(responses[getRandomIntInclusive(0, responses.length-1)]) //grab random response on button click
    setCount(count + 1)
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    console.log(randomNum)
    return randomNum
  }


  useEffect(() => {
    console.log('%cRESPONSE CHANGED', 'color: lime')

    return() => {
      console.log('response cleaned up')
      console.log('this is the previous response:', response)
      setPreviousResponse(response)
    }

  }, [count]) //took off strict mode and realized this must also listen out for a button click instead of response change bc if response happens to repeat it will not trigger this



  // trying something random
  const Arthur = {
    name: "Arthur Bernier",
    age: "35",
    email: "ceo@arthurbernierjr.com",
  }

  return (
    <div className="App">
      < Header />
      < Message response={response}/>
      < Button randomResponse={randomResponse} clicks={count}/>

      <div className='previously'>
        <h3>previous response from useEffect:</h3>
        <p> {previousRespone}</p>
      </div>

      <div className='trackContainer'>
        <h3>Track Record <span>Total responses: {allResponses.length}</span></h3>
        
        <ol>
          {allResponses.map((resp, i) => {
            return (
              <List response={resp} key={i} />
            )
          })}
        </ol>
      </div>

      <div className='random'>
        <h2>trying something random</h2>
        <p>using Object.keys to iterate over an object. week 8 day 1 class notes</p>
        {Object.keys(Arthur).map((key, index) => {
          return (
          <p> {key}: {Arthur[key]} </p>
          )
        })}
      </div>

    </div>
  );
}

export default App;
