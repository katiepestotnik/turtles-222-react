import './App.css';
import {useState, useEffect} from 'react'
function App() {
  const [turtles, setTurtles] = useState(null)
  const URL = "https://turtles-222.herokuapp.com/turtles"
  const getTurtles = async () => {
    const response = await fetch(URL)
    console.log(response)
    const data = await response.json()
    setTurtles(data)
  }
  useEffect(() => {
    getTurtles()
    console.log(turtles)

  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
