import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import restaurants from '../store/restaurants'
import Restaurant from '../pages/Restaurant'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
    restaurants: restaurants
    }
  }
  render() {
    const{ restaurants } = this.state

  return (
    <div>
      <h1>Top 10 Restaurants</h1>
      <ul>{restaurants.map((restaurant) =>
        <li>
          <Link to={`/restaurant/${restaurant.id}`}>
            {restaurant.name}
          </Link>
        </li>
      )}
      </ul>
    </div>
    );
  }
}
