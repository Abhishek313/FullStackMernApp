import { useState,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios' 

function App() {

  let [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/jokes')
    .then( (response) => {
      setJokes(response.data)
    })
    .catch((err) => {
    console.log(err)
    })
    
   })

  return (
    
    <>
      <h1>Chai aur FullStack</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map( (joke,index) => (
          <div key = {joke.category}>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
          </div>
        ))
      }
    </>
  )
}

export default App
