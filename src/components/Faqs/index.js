import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    openItems: [],
  }

  handleClickToggle = id => {
    this.setState(prevState => {
      const isOpen = prevState.openItems.includes(id)
      return {
        openItems: isOpen
          ? prevState.openItems.filter(itemId => itemId !== id)
          : [...prevState.openItems, id],
      }
    })
  }

  render() {
    const {openItems} = this.state
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="main">
          <h1 className="title">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(faq => (
              <FaqItem
                key={faq.id}
                faq={faq}
                onClickedBtn={openItems.includes(faq.id)}
                onClickToggle={() => this.handleClickToggle(faq.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
