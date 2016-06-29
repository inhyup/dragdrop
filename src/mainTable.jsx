import React from 'react'
import {SectionList, SectionAdd} from './sectionComponents.jsx'

var MainTable = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Main Table</h1>
        <SectionList />
        <SectionAdd />
      </div>
    )
  }
})

export default MainTable
