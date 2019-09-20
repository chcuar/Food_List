import React, { Component } from 'react';
import List from './components/mylist/List';
import FoodForm from './components/mylist/FoodForm';
import Footer from './components/mylist/Footer';

class App extends Component {
  state = {
    foodLists: [
      { id: 1, item: 'Bread', price: 3, inCart: false },
      { id: 2, item: 'Milk', price: 3, inCart: false },
      { id: 3, item: 'Cereal', price: 3, inCart: false },
      { id: 4, item: 'Bagel', price: 3, inCart: false },
      { id: 5, item: 'Jam', price: 3, inCart: false }
    ],
    filter: 'All'
  }

  setFilter = (filter) => {
    // filter: filter
this.setState({ filter })
}

getUniqId = () => {
  //NOTE We are just using this as a helper function for id's since we aren't using a db yet
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
 }

 addFoodList = (item) => {
  const { foodLists } = this.state
                  // name: name
  const foodList = { item, inCart: false, id: this.getUniqId() }
  this.setState({ foodLists: [foodList, ...foodLists] })
}

handleClick = (id) => {
  const { foodLists } = this.state
  this.setState({
    foodLists: foodLists.map( foodList => {
      if (foodList.id === id) {
        return {
          ...foodList,
          inCart: !foodList.inCart
        }
      }
      return foodList
    })
  })
}

visibleThings = () => {
  const { foodLists, filter } = this.state
  switch(filter) {
    case 'Active':
      return foodLists.filter( t => !t.inCart )
    case 'In Cart':
      return foodLists.filter( t => t.inCart )
    default:
      return foodLists
  }
}

  render() {
    const { foodLists, filter } = this.state
    return (
      <div>
        <FoodForm addFoodList={this.addFoodList} />
        <List name= "Grocery List" things={this.visibleThings()} foodListClick={this.handleClick} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }

}


export default App;
