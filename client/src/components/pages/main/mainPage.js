import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchInitial } from './../../../actions/weather';
import Spinner from './../../../common/Spinner';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {
        name: '',
        country: '',
        populate: Number,
      },
      list: [],
    }
  }
  componentWillMount() {
    const name = 'Hanoi';
    this.props.fetchInitial(name);
  }
  componentWillReceiveProps(nextProps) {
    // console.log(JSON.stringify();
  }
  render() {
    const { isFetching } = this.props.weather;
    const weather = this.props.weather;
    let MainContnet;
    if (isFetching || JSON.stringify(weather.data) === null) {
      MainContnet = <Spinner />
    } else {
      MainContnet = (
        <div className="main">
          <h1>Simple Metro Weather Widget</h1>
          <div className="w3layouts_main_grids">
            <div className="w3layouts_main_grid_left">
              <div className="w3_search">
                <form action="#" method="post">
                  <input type="text" name="Search" placeholder="Search..." required="" />
                  <input type="submit" value=" " />
                </form>
              </div>
              <div className="w3l_search_bottom">
                <ul className="w3ls_weather">
                  <li><i>9:00 AM</i>Chicago<span>20°</span></li>
                  <li><i>10:00 AM</i>Miami<span>25°</span></li>
                  <li><i>12:00 PM</i>Paris<span>30°</span></li>
                  <li><i>11:00 AM</i>Houston<span>35°</span></li>
                  <li><i>3:00 PM</i>Barcelona<span>15°</span></li>
                  <li><i>6:00 PM</i>Hawaii<span>35°</span></li>
                </ul>
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
                  <h2>Brazil</h2>
                  <p><i className="fa fa-clock-o" aria-hidden="true"></i> 11:00 AM</p>
                </div>
                <div className="w3_agile_main_grid_right">
                  <ul className="w3layouts_weather_updates">
                    <li>
                      <canvas id="clear-day" width="25" height="25"></canvas>
                      25°<span>Monday<i><label className="fa fa-clock-o" aria-hidden="true"></label> 11:00 AM</i></span>
                    </li>
                    <li>
                      <canvas id="sleet" width="25" height="25"></canvas>
                      5°<span>Tuesday<i><label className="fa fa-clock-o" aria-hidden="true"></label> 12:00 PM</i></span>
                    </li>
                    <li>
                      <canvas id="partly-cloudy-day" width="25" height="25"></canvas>
                      25°<span>Wednesday<i><label className="fa fa-clock-o" aria-hidden="true"></label> 9:00 AM</i></span>
                    </li>
                    <li>
                      <canvas id="partly-cloudy-night" width="25" height="25"> </canvas>
                      15°<span>Thursday<i><label className="fa fa-clock-o" aria-hidden="true"></label> 4:00 PM</i></span>
                    </li>
                  </ul>
                </div>
                <div className="clear"> </div>
              </div>
              <div className="w3_agile_main_grid_right1">
                <div id="owl-demo" className="owl-carousel">
                  <div className="item">
                    <div className="w3_weather_scroll">
                      <h4>10:00 AM</h4>
                      <h5>27°</h5>
                      <canvas id="clear-night" width="30" height="30"></canvas>
                    </div>
                  </div>
                  <div className="item">
                    <div className="w3_weather_scroll">
                      <h4>11:00 AM</h4>
                      <h5>15°</h5>
                      <canvas id="cloudy" width="30" height="30"></canvas>
                    </div>
                  </div>
                  <div className="item">
                    <div className="w3_weather_scroll">
                      <h4>3:00 PM</h4>
                      <h5>-5°</h5>
                      <canvas id="rain" width="30" height="30"></canvas>
                    </div>
                  </div>
                  <div className="item">
                    <div className="w3_weather_scroll">
                      <h4>5:00 PM</h4>
                      <h5>35°</h5>
                      <canvas id="wind" width="30" height="30"></canvas>
                    </div>
                  </div>
                  <div className="item">
                    <div className="w3_weather_scroll">
                      <h4>8:00 PM</h4>
                      <h5>5°</h5>
                      <canvas id="snow" width="30" height="30"></canvas>
                    </div>
                  </div>
                  <div className="item">
                    <div className="w3_weather_scroll">
                      <h4>10:00 PM</h4>
                      <h5>18°</h5>
                      <canvas id="fog" width="25" height="25"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"> </div>
          </div>
          <div className="agileits_copyright">
            <p>© 2017 Simple Metro Weather Widget. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
          </div>

        </div>
      )
    }
    return (
     {MainContnet}
    )
  }
}
const mapStateToProps = (state) => ({
  weather: state.weather,
})
export default connect(mapStateToProps, { fetchInitial })(Main);