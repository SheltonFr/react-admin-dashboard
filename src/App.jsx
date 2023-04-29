import { useState } from 'react'
import Home from './pages/Hone/Home'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
              <Route path='new' element={<New />} />
            </Route>

            <Route path='product'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
