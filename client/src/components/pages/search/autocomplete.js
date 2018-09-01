import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react'
import list_autocomplete from './../../../common/AutocompleteItem';
import { connect } from 'react-redux';
import { fetchInitial ,fetchByToday } from './../../../actions/weather';
require('./autocomplete.css');


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : list_autocomplete.filter(lang =>
    lang.value.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.value;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.value}
  </div>
);

class Autocomplete extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  onSearch(e) {
    e.preventDefault();
    this.props.fetchInitial(this.state.value);
    this.props.fetchByToday(this.state.value);
  }
  handleSubmit(e) {
    if (e.keyCode === 13) {
      this.onSearch();
    }
  }
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type a name of city',
      value,
      onChange: this.onChange,
      onKeyPress: this.handleSubmit
    };
    return (
      <form onSubmit={this.onSearch.bind(this)} >
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </form>
    );
  }
}
export default connect(null , {fetchInitial,fetchByToday})(Autocomplete);