import React, { Component } from 'react'

import { PlusComponent } from '@reza/react-plus-component'
import Repeat from './Repeat'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  add = () => {
    return this.ref.current.addComponent()
  }

  remove = () => {
    return this.ref.current.removeComponent()
  }

  getState = () => {
    return this.ref.current.getState()
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>remove</button>
        <PlusComponent ref={this.ref} component={<Repeat />}/>
      </div>
    )
  }

}
