import React from 'react'

import './App.css'
import { ContextAuthProvider } from './context/ContextAuth'
import {Router} from './router/Router'
function App() {

  return (
    <div >
  <ContextAuthProvider>
      <Router/>
      </ContextAuthProvider>
    </div>
  )
}

export default App
