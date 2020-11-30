import React from 'react'
import SearchForm from '../components/weather/Weather'
import { connect } from 'react-redux';
import { itemsFetchData } from "../operations/operations";
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import { signIn } from "../actions/actionWeather";



export class WeatherContainer extends React.Component {
  state = {
    redirectTo: false,
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    this.props.signIn({ email, password }, () => {
      this.setState({ redirectTo: true });
    });

    this.passwordInput.value = "";
  };


  submit = values => {
    const { location } = values;
    this.props.fetchData(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=22a053e2de5c3c1d4a609a446bebe537`);
  }

  render() {
    const { isFetching, message } = this.props;

    if (this.state.redirectTo) {
      return <Redirect to="/profile" />;
    }

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error getting the weather for this location</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    console.log(this.props.items.sys);

    return (

      <div className="wrapper">
        <h3>Autorization</h3>

        <span>{isFetching && "...обработка"}</span>
        <form onSubmit={this.submitHandler}>
          <p className="message">{message}</p>
          <TextField
            id="filled-basic"
            type="text"
            ref={el => (this.emailInput = el)}
            placeholder="Email*"
          />
          <br></br>
          <TextField
            id="filled-basic"
            type="password"
            ref={el => (this.passwordInput = el)}
            placeholder="Password*"
          />
        </form>
        <button className="btn_class_submit" type="submit" value="Submit">submit</button>

        <h1>{this.props.items.name && this.props.items.sys ? `Weather in ${this.props.items.name}, ${this.props.items.sys.country}` : null}</h1>
        <h1>{this.props.items.main ? `${this.props.items.main.temp} °C` : null}</h1>
        <div>
          {this.props.items.weather ? <img src={`http://openweathermap.org/img/w/${this.props.items.weather[0].icon}.png`} alt='weather icon' /> : null}
        </div>
        <p>{this.props.items.weather ? this.props.items.weather[0].description : null}</p>
        <SearchForm onSubmit={this.submit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);