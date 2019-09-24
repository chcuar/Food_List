import React, { Component } from 'react';
import { Container, Header, Image, Input, Label } from 'semantic-ui-react';

class FoodForm extends Component {
  state = { item: '', price: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addFoodList(this.state)
    this.setState({ item: '', price: '' })
  }

  render() {
    const { item, price } = this.state
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <Input 
          iconPosition='left'
          label={{ tag: true, content: 'Tag' }}
          labelPosition='right'
          onChange={this.handleChange}
          required
          placeholder='add a food item'
          name='item'
          value={item}
        />
        <Input 
          iconPosition='left'
          label={{ tag: true, content: '.00' }}
          labelPosition='right'
          onChange={this.handleChange}
          required
          placeholder='food price'
          name='price'
          value={price}
        />
        <Input type="submit"/>
      </form>
      </div>
    )
  }
}

export default FoodForm;
