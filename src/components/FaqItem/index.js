import './index.css'

const FaqItem = props => {
  const {faq, onClickToggle, onClickedBtn} = props
  const {id, questionText, answerText} = faq

  const onClicked = () => {
    onClickToggle(id)
  }

  return (
    <li className="list-item">
      <div className="item-container">
        <div className="item">
          <h1 className="item-heading">{questionText}</h1>
          <button className="item-btn" type="button" onClick={onClicked}>
            {onClickedBtn ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
          </button>
        </div>
        {onClickedBtn && (
          <>
            <hr className="line" />
            <p className="item-ans">{answerText}</p>
          </>
        )}
      </div>
    </li>
  )
}
export default FaqItem
