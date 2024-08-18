import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./CSS/App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal:</button>
      <div className="animal-list">
        {animals.map((animal, i) => {
          return <AnimalShow key={i} type={animal} />;
        })}
      </div>
    </div>
  );
}
