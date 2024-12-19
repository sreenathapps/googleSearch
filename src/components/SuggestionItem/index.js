import './index.css'

const SuggestionItem = props => {
  const {suggestion, onClickListItem} = props

  const handleClick = () => {
    onClickListItem(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        className="up-arrow"
        alt="arrow"
        onClick={handleClick}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
