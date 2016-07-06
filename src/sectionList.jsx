import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
import Section from './section.jsx'
import update from 'react/lib/update'

const style = {
  width: 400
}

var SectionList = React.createClass({

  getInitialState: function() {
    return {
      sections: [{
        id: 1,
        text: 'section 1'
      }, {
        id: 2,
        text: 'section 2'

      }, {
        id: 3,
        text: 'section 3'

      }, {
        id: 4,
        text: 'section 4'

      }]
    }
  },


  moveSection: function(dragIndex, hoverIndex) {
    const { sections } = this.state
    const dragSection = sections[dragIndex]

    this.setState(update(this.state, {
      sections: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragSection]
        ]
      }
    }))
  },

  render: function () {

    const {sections} = this.state

    return (
      <div style={style}>
        <h2>Section List</h2>
        {sections.map((section, i) => {
          return (
              <Section key={section.id}
                       index={i}
                       id={section.id}
                       text={section.text}
                       moveSection={this.moveSection}

                        />
          )
        })}
      </div>
    )
  }
})

export default DragDropContext(HTML5Backend)(SectionList)
