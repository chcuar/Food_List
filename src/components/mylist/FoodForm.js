import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          required
          placeholder='add a food item'
          name='item'
          value={item}
        />
        <input 
          onChange={this.handleChange}
          required
          placeholder='food price'
          name='price'
          value={price}
        />
        <input type="submit"/>
      </form>
    )
  }
}

export default FoodForm;