import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchByToday } from './../../../actions/weather';
class WeatherToday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: {},
      city: 'HaNoi',
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.change_city) {
      this.setState({
        city: nextProps.change_city
      })
    }
  }
  componentDidMount() {
    const initial = this.state.city;
    this.props.fetchByToday(initial);
  }
  render() {
    var temp  = this.props.temp_today;
    
    return (
      <div className="w3_agile_main_grid_right1">
        <div id="owl-demo" className="owl-carousel">
          <div className="item">
            <div className="w3_weather_scroll">
              <h4>Morning</h4>
              <h5>{Math.round(temp.morn)}°</h5>
              <canvas id="clear-night" width="30" height="30"></canvas>
            </div>
          </div>
          <div className="item">
            <div className="w3_weather_scroll">
              <h4>Everning</h4>
              <h5>{Math.round(temp.eve)}°</h5>
              <canvas id="cloudy" width="30" height="30"></canvas>
            </div>
          </div>
          <div className="item">
            <div className="w3_weather_scroll">
              <h4>Night</h4>
              <h5>{Math.round(temp.night)}°</h5>
              <canvas id="rain" width="30" height="30"></canvas>
            </div>
          </div>
          <div className="item">
            <div className="w3_weather_scroll">
              <h4>Min</h4>
              <h5>{Math.round(temp.min)}°</h5>
              <canvas id="wind" width="30" height="30"></canvas>
            </div>
          </div>
          <div className="item">
            <div className="w3_weather_scroll">
              <h4>Max</h4>
              <h5>{Math.round(temp.max)}°</h5>
              <canvas id="snow" width="30" height="30"></canvas>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  change_city: state.weather.change_city,
  temp_today : state.weather.temp_today,
})
export default connect(mapStateToProps, { fetchByToday })(WeatherToday);