import React from 'react'
import Section from './section.jsx'

var SectionList = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Section List</h2>
        <Section />

      </div>

    )
  }
})

var SectionAdd = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Section Add</h2>
      </div>
    )
  }
})

export {SectionList, SectionAdd}
