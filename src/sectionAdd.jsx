import React from 'react'

var SectionAdd = React.createClass({
  propTypes: {
    practice: React.PropTypes.array
  },

  render: function () {
    return (
      <div>
        <h2>Section Add</h2>
        {this.props.practice}
      </div>
    )
  }
})

export default SectionAdd
