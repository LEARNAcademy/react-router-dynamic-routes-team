import React, { Component } from 'react';

import restaurants from '../store/restaurants'

export default class Popular extends Component {
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
        <h1>{restaurant.name}</h1>
        <hr/>
        {restaurant &&
          <div>
            <ul>{restaurant.popular.map((r, i) =>
              <li>{restaurant.popular[i]}
              </li>
            )}
              </ul>
          </div>
        }
      </div>
    );
  }
}
