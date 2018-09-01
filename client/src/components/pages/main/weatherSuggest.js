import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { change_city } from './../../../actions/weather';
import item_Suggest from './../../../common/ListCitySuggest';
require('./main.css');


class WeatherSuggest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newState: [
        {
          name: '',
          temp: {},
        }
      ],
      country: '',
    }
  }
  componentDidMount() {
    item_Suggest.map((item, index) => {
      axios.get(`/api/weather/getoneday/${item.value}`)
        .then(result => {
          let newState = Object.assign({}, this.state.newState);
          newState.name = result.data.city.name;
          newState.temp = result.data.list[0].temp;
          this.setState({
            newState: [...this.state.newState, newState],
          })
        })
        .catch(err => {
          console.log(err);
        })
    })
  }
  onChangeCountry(value) {
    this.props.change_city(value);
  }
  
  
  render() {
    const { newState } = this.state;
    let result_suggest = newState.slice(1).map((item, index) => {
      return (
        <li
          className="change_country"
          key={index}
          style={{ cursor: 'pointer' }}
          onClick={this.onChangeCountry.bind(this, item.name)}><i>12:00 AM</i>
          {item.name}
          <span style={{ color: '#FFD700' }} >{Math.round(item.temp.day)}°</span></li>
      )
    })
    return (
      <ul className="w3ls_weather">
        {result_suggest}
      </ul>
    )
  }
}

export default connect(null, { change_city })(WeatherSuggest);