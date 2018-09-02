import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchInitial } from './../../../actions/weather';
import Moment from 'react-moment';
import WeatherToday from './weatherToday';
import WeatherSuggest from './weatherSuggest';
import Autocomplete from '../search/autocomplete';
require('./main.css');
class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      name: 'HaNoi',
      text_search: '',
    }
  }
  componentDidMount() {
    this.props.fetchInitial(this.state.name);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.change_city) {
      this.setState({
        name: nextProps.change_city
      })
    }
  }
  render() {
    const { city, listWeatherDay, country,temp_today ,errors } = this.props.weather;
    let icon = (item) => {
      if (item.weather[0].main == 'Rain') {
        return (
          <i className="fa fa-tint" aria-hidden="true" style={{ fontSize: '15px', verticalAlign: "top" }}></i>
        )
      } else if (item.weather[0].main == 'Clouds') {
        return (
          <i className="fa fa-cloud" aria-hidden="true" style={{ fontSize: '15px', verticalAlign: "top", color: '#c7bcbc' }}></i>
        )
      } else if (item.weather[0].main == 'Clear') {
        return (
          <i className="fa fa-sun-o" aria-hidden="true" style={{ fontSize: '15px', verticalAlign: "top", color: '#ffca00' }}></i>
        )
      }
    }
    let listWeather = (!!listWeatherDay) ? listWeatherDay.map((value, index) => {
      return (
        <li key={index} >
          {icon(value)}
          &nbsp;{Math.round(value.temp.day)}°<span><Moment format="DD/MM/YYYY">{new Date(1000 * value.dt)}</Moment><i><label className="fa fa-clock-o" aria-hidden="true"></label> 12:00 PM</i></span>
        </li>
      )
    }) : [];

    return (
        <div className="main">
          <h1>Simple Metro Weather Widget</h1>
          <div className="w3layouts_main_grids">
            <div className="w3layouts_main_grid_left">
              <div className="w3_search">
                <Autocomplete />
              </div>
              <div className="w3l_search_bottom">
                <WeatherSuggest />
                <ul className="agileits_social_icons">
                  <li><a href="#" className="agileinfo_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="wthree_instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="w3_agileits_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#" className="agile_google"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="w3layouts_main_grid_right">
              <div className="agileits_w3layouts_main_grid_right">
                <div className="w3_agile_main_grid_left">
                  <h2>{(!errors && city) ? city.name : 'NotFound The City'}</h2>
                  <p><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{(!errors && city) ? country : ''}</p>
                  {/* <TimeOfCountry /> */}
                </div>
                <div className="w3_agile_main_grid_right">
                  <ul className="w3layouts_weather_updates">
                    {(!errors && city) ? listWeather : null}
                  </ul>
                </div>
                <div className="clear"> </div>
              </div>
              <WeatherToday temp_today = {temp_today}/>
            </div>
            <div className="clear"> </div>
          </div>
          <div className="agileits_copyright">
            <p>© 2017 Simple Metro Weather Widget. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
  weather: state.weather,
  city: state.weather.city,
  list: state.weather.listWeatherDay,
  country: state.weather.country,
  temp_today : state.weather.temp_today,
  change_city: state.weather.change_city,
  errors: state.weather.errors,
})
export default connect(mapStateToProps, { fetchInitial })(Main);