import React, {PropTypes} from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'
import ItemTypes from './ItemTypes.jsx'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
}

const sectionSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    }
  }
}

const sectionTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    if(dragIndex === hoverIndex) {
      return
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    const clientOffset = monitor.getClientOffset()

    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    if(dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    props.moveSection(dragIndex, hoverIndex)

    monitor.getItem().index = hoverIndex
  }
}

function collect_1(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

function collect_2(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

var Section = React.createClass({
  render: function () {
    const {text, isDragging, connectDragSource, connectDropTarget} = this.props
    const opacity = isDragging ? 0 : 1

    return connectDragSource(connectDropTarget(
      <div style={{ ...style, opacity }}>
        {text}
      </div>
    ))
  }
})
Section = DragSource(ItemTypes.SECTION, sectionSource, collect_2)(Section)
Section.PropTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  moveSection: PropTypes.func.isRequired
}


export default DropTarget(ItemTypes.SECTION, sectionTarget, collect_1)(Section)
