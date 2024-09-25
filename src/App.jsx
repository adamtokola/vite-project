import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies] = useState(puppyList);  // Removed setPuppies since it's not being used
  const [featPupId, setFeatPupId] = useState(null);  // Updated to store selected puppy ID

  // Find the featured puppy based on the selected ID
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {/* Map through the puppy list and set the selected ID on click */}
      {puppies.map((puppy) => (
        <p
          key={puppy.id}
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
        >
          {puppy.name}
        </p>
      ))}

      {/* Conditionally render the detailed view of the selected puppy */}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
