import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'

function App() {

  return (
    <div className="App">
      
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
