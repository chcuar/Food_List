import React from 'react';

const styles = {
  foodList: {
    cursor: 'pointer',
  },
  inCart: {
    color: 'grey',
    textDecoration: 'line-through',
  }
}

const FoodList = ({ id, item, price, inCart, foodListClick }) => (
  <li
    style={ inCart ? { ...styles.foodList, ...styles.inCart } : styles.foodList }
    onClick={ () => foodListClick(id) }
  >
    { item }: ${ price }
  </li>
)

export default FoodList;