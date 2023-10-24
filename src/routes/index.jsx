import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPages from "../pages/landingPages"
import Login from '../pages/auth/login'
import SignUp from '../pages/auth/signup'
import AllRecipe from '../pages/allRecipe'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPages />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/allrecipe' element={<AllRecipe />} />
      </Routes>
    </Router>
  )
}

export default App
