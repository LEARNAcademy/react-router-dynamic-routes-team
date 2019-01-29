import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import restaurants from '../store/restaurants'
import Popular from '../pages/Popular'

export default class Restaurant extends Component {
  constructor(props){
    super(props)
    const{match} = props

    this.state = {
      restaurantId: match.params.id
    }
  }

  componentDidUpdate(prevProps){
    const prevMatch = prevProps.match
    const{match} = this.props
    if(match.params.id != prevMatch.params.id){
      this.setState({restaurantId: match.params.id})
    }
  }
  render() {
      const{restaurantId} = this.state
      const restaurant = restaurants.find((r)=> r.id == restaurantId)

    return (
      <div>
        <h1>Restaurant</h1>
        <hr/>
        {restaurant &&
          <div>
            <h3>{restaurant.name}</h3>
            <p>Location: {restaurant.location}</p>
            <Link to={`/restaurant/${restaurant.id}/popular`}>Menu Items</Link>
          </div>
        }
      </div>
    );
  }
}
