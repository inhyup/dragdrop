import React from 'react'
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin'
import Collapse from './collapse.jsx'

var QuestionList = React.createClass({
  getInitialState() {
    return {isOpened: false}
  },

  shouldComponentUpdate,

  onChange({target: {values}}) {
    this.setState({paragraphs: parseInt(value, 10)})
  },

  render() {
    const {isOpened} = this.state

    return (
      <div>
        <div>
          <label>
            Opened:
            <input
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>

        </div>

        <Collapse
          isOpened={isOpened}>
          <div>
            question 1
          </div>
          <div>
            question 2
          </div>
        </Collapse>

      </div>
    )
  }
})

export default QuestionList
