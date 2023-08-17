import './App.css'
import { useState } from 'react'
import TripsList from "./TripsList"
import { useFetch } from './hooks/useFetch'

function App() {
  const [url, setUrl] = useState("http://localhost:3000/trips")
  const { data: trips, isPending, error } = useFetch(url)

  return (
    <div>
      <h1>Trips</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>Not Found</div>}
      <TripsList trips={trips} />
      <button onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}>Europe</button>
      <button onClick={() => setUrl("http://localhost:3000/trips?loc=America")}>America</button>
    </div>
  )
}

export default App
