import './App.css';
import AddTracker from './Components/AddTracker';
import Header from './Components/Header';
import Resolutions from './Components/Resolutions';
import { useState, useEffect } from "react";

const App = () => {

  const [resolutions, setResolutions] = useState([
  ]);

  useEffect(() => {
    const getResolutions = async () => {
      const resFromServer = await fetchResolutions()
      setResolutions(resFromServer)
    }
 
    getResolutions()
  }, []
  
  )

  const fetchResolutions = async () => {
    const res = await fetch('http://localhost:5002/resolutions')
    const data = await res.json()

    return data
  }

  const fetchResolution = async (id) => {
    const res = await fetch(`http://localhost:5002/resolutions/${id}`)
    const data = await res.json()

    return data
  }

  const addResolution = async (resolution) => {
    const res = await fetch('http://localhost:5002/resolutions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(resolution),
    })

    const data = await res.json()

    setResolutions([...resolutions, data])
  }

  const onDelete = async (id) => {
      await fetch(`http://localhost:5002/resolutions/${id}`,
      {method: 'DELETE'})
     console.log('Vorsatz wurde gelöscht');
     setResolutions(resolutions.filter((resolution) => resolution.id !== id));
  }

  const done = async (id) => {

    const taskToDone = await fetchResolution(id)
    const updRes = {...taskToDone, erledigt: !taskToDone.erledigt}

    const res = await fetch(`http://localhost:5002/resolutions/${id}`,
    { method: 'PUT',
    headers: { 'Content-type': 'application/json',},
    body: JSON.stringify(updRes)
  })

  const data = await res.json()

     setResolutions(
       resolutions.map((resolution) => 
       resolution.id === id ? {...resolution, erledigt: data.erledigt}
       : resolution)
     )
  }
  
    return (
   <div className='container'>
    <Header />
    <AddTracker
    onAdd={addResolution} />
    <h2>Vorsätze:</h2>
    <Resolutions resolutions = {resolutions}
    onDelete = {onDelete}
    onChange = {done} />
    </div>
    );
  }

  


export default App;
