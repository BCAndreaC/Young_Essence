import { useState } from 'react'
import './App.css'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <Router basename="/Young_Essence">
      <AppRouter />
    </Router>
  )
}

export default App

