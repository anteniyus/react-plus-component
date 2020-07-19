# @anteniyus/react-plus-component

> A general component that can add or remove a specific component and also gives you the state of all existing components.

[![NPM](https://img.shields.io/npm/v/@reza/react_plus_component.svg)](https://www.npmjs.com/package/@reza/react_plus_component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @anteniyus/react-plus-component
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from '@anteniyus/react-plus-component'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```
Here is an example of using react-plus-component
```jsx
import React, { Component } from 'react';

import { PlusComponent } from '@reza/react-plus-component';
import RepeatComponent from './Repeat';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  add = () => {
    return this.ref.current.addComponent();
  };

  remove = () => {
    return this.ref.current.removeComponent();
  };

  getState = () => {
    return this.ref.current.getState();
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>remove</button>
        <PlusComponent ref={this.ref} component={<RepeatComponent />}/>
      </div>
    );
  }

}

```

## License

MIT © [Reza](https://github.com/anteniyus)
=======
# react-plus-component
