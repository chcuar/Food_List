import React, { Component } from 'react';

class FoodForm extends Component {
  state = { item: '' }

  handleChange = (e) => {
    const { item, value } = e.target
    this.setState({ [item]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addFoodList(this.state.item)
    this.setState({ item: '' })
  }

  render() {
    const { item } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          required
          placeholder='add a food item'
          item='item'
          value={item}
        />
      </form>
    )
  }
}

export default FoodForm;