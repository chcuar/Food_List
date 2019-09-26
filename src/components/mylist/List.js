import React from 'react';
import FoodList from './FoodList';

const List = ({ name, things, foodListClick, remove }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { things.map( thing =><FoodList key={thing.id} {...thing} foodListClick={foodListClick} remove={remove}/> )}
    </ul>
  </div>
)

export default List;
