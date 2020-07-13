import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

export class PlusComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentObjects: []
    }
    this.componentRefs = {}
  }

  addComponent = () => {
    const component = Object.create(this.props.component)
    component.customKey = new Date().getTime() + '_' + Math.random()

    this.setState((prevState) => ({
      componentObjects: [...prevState.componentObjects, component]
    }))
  }

  removeComponent = (i) => {
    const componentObjects = [...this.state.componentObjects]
    componentObjects.splice(i, 1)

    delete this.componentRefs[i]

    this.setState({ componentObjects })
  }

  getState = () => {
    const componentRefsState = []

    Object.keys(this.componentRefs).forEach((key) => {
      if (this.componentRefs[key])
        componentRefsState.push(this.componentRefs[key].state)
    })

    return componentRefsState
  }

  clearState = () => {
    this.setState({ componentObjects: [] })
    this.componentRefs = {}
  }

  createUI() {
    return this.state.componentObjects.map((DynamicComponent, index) => (
      <DynamicComponent.type
        ref={(ref) => {
          this.componentRefs[index] = ref
        }}
        key={DynamicComponent.customKey}
      />
    ))
  }

  render() {
    return <React.Fragment>{this.createUI()}</React.Fragment>
  }
}

PlusComponent.propTypes = {
  component: PropTypes.object.isRequired
}
