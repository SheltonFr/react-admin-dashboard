import { useState } from 'react'
import Home from './pages/Hone/Home'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { productInputs, userInputs } from './formSource'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />

            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title="Add new User"/>} />
            </Route>

            <Route path='product'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title="Add new Product"/>} />
            </Route>

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
