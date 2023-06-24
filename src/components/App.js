

import React, { useEffect, useState } from "react";
import './../styles/App.css';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];


const App = () => {
  const [search, setSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState([...fruits]);

  useEffect(() => {
    let filteredFruits = fruits.filter((fruit) => fruit.includes(search));
    setFilteredItem(filteredFruits);
  }, [search])

  return (
    <div>
      <h1>Search item</h1>
      <input type="text" onInput={(e) => setSearch(e.target.value)}></input>
      <ul>
        {
          filteredItem.map((filteredFruit) => (
            <li>{filteredFruit}</li>
          ))
        }
      </ul>

    </div>
  )
}

export default App;