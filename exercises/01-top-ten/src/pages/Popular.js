import React, { Component } from 'react';

import restaurants from '../store/restaurants'

export default class Popular extends Component {
  render() {

    return (
      <div>
      <h1>Pop</h1>
      </div>
    );
  }
}
// const{restaurantId} = this.state
// const restaurant = restaurants.find((r)=> r.id == restaurantId)

// constructor(props){
//   super(props)
//   const{match} = props
//
//   this.state = {
//     restaurantId: match.params.id
//   }
// }
//
// componentDidUpdate(prevProps){
//   const prevMatch = prevProps.match
//   const{match} = this.props
//   if(match.params.id != prevMatch.params.id){
//     this.setState({restaurantId: match.params.id})
//   }
// }
// <h1>{restaurant.name}</h1>
// <hr/>
// {restaurant &&
//   <div>
//   <h3>{restaurant.name}</h3>
//   <p>Location: {restaurant.location}</p>
//   <p>Their most popular items is their {restaurant.popular}</p>
//   </div>
// }
