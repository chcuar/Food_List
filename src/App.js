import React, { Component } from 'react';
import List from './components/mylist/List';
import FoodForm from './components/mylist/FoodForm';
import Footer from './components/mylist/Footer';
import { Container, Header, Image } from 'semantic-ui-react';

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

 addFoodList = (incomingItem) => {
  const { item, price} = incomingItem
  const { foodLists } = this.state
                  // name: name
  const foodList = { item, price, inCart: false, id: this.getUniqId() }
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
      <Container>
        <FoodForm addFoodList={this.addFoodList} />
        <Header as='h2' attached='top' color="green">Grocery List</Header>
        <List things={this.visibleThings()} foodListClick={this.handleClick} />
        
        <Image.Group size='small'>
          <Image src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <Image src="https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <Image src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
          <Image src="https://images.unsplash.com/photo-1556741533-f6acd6474059?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </Image.Group>
        <Footer filter={filter} setFilter={this.setFilter} />
      </Container>
    );
  }

}


export default App;
