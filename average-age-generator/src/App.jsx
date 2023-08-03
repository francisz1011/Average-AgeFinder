import { useState } from 'react';
import './App.css';
import axios from 'axios';

 

function App() {
const [name, setName] = useState("");
const [averageAge, setaverageAge] = useState(null);

  const fetchData = () => {
      axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        setaverageAge(res.data)
      })
  }
 
return(
<div className='App'> 
   <input placeholder='Eg. Francis...'
   onChange={(event) => {
    setName(event.target.value);
   }}/>
<button onClick={fetchData}> Predict Age  </button>
<h1> Name: {averageAge?.name} </h1>
<h1> Average Age: {averageAge?.age} </h1>
<h1> Count: {averageAge?.count} </h1>
</div>
    )
 }
 
export default App;
