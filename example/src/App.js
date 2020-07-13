import React, { Component } from 'react'

import { PlusComponent } from '@reza/react_plus_component'
import Repeat from './Repeat'
import '@reza/react_plus_component/dist/index.css'

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
