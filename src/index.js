import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

import { StoreToDo } from './Store'

const store = new StoreToDo()

render(<App store={store}/>, document.getElementById('root'))