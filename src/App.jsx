import Home from './pages/Hone/Home'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { productInputs, userInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/AuthContext'

function App() {

  const { darkMode } = useContext(DarkModeContext)

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to={'/login'} />
  }

  console.log(currentUser);
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes>
          <Route path='/' >
            <Route path='login' element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route path='users'>
              <Route index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                } />
              <Route
                path=':userId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                } />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add new User" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path='products'>
              <Route index element={<List />} />
              <Route
                path=':productId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add new Product" />
                  </RequireAuth>
                } />
            </Route>

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
