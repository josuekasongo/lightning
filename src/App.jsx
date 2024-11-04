// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from "./components/Header"
import Hero from './components/Hero'
import Shape from './components/Shape'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
        <Header />
        <main>
          <Hero/>
          <div><Shape/></div>
          <div><Skills/></div>
          <div><Contact/></div>
        </main>
    </div>
  )
}

export default App