import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
function App() {
  return (
    <div className="h-screen flex flex-col">
    <Header/>
    <Body/>
    </div>
   
  )
}

export default App
