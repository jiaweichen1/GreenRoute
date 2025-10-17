// src/App.js
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/rides")
      .then(res => setRides(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Available Rides</h1>
      <ul>
        {rides.map(ride => (
          <li key={ride.id}>{ride.destination}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
