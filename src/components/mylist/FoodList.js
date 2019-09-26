import React from 'react';
import { Button, Icon} from 'semantic-ui-react';

const styles = {
  foodList: {
    cursor: 'pointer',
    
  },
  inCart: {
    color: 'red',
    textDecoration: 'line-through',
  }
}

const FoodList = ({ id, item, price, inCart, foodListClick, remove }) => (
  <div>
  <li
    style={ inCart ? { ...styles.foodList, ...styles.inCart } : styles.foodList }
    onClick={ () => foodListClick(id) }
  >
    { item }: ${ price }
  
  </li>
  <Icon name='delete' size='small' color='red' onClick={() => remove(id)}/>
  </div>
)

export default FoodList;