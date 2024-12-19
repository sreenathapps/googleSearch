import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = suggestion => {
    console.log(suggestion)
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const filteredSuggestions = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="google-img"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="search-container">
          <div className="search-box">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            />
            <input
              type="search"
              value={searchInput}
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              className="search-input"
            />
          </div>
          <ul className="search-items">
            {filteredSuggestions.map(each => (
              <SuggestionItem
                key={each.id}
                onClickListItem={this.onClickArrow}
                suggestion={each.suggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
