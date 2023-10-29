import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPages from "../pages/landingPages"
import Login from '../pages/auth/login'
import SignUp from '../pages/auth/signup'
import AllRecipe from '../pages/allRecipe'
import Profile from '../pages/profile'
import DetailRecipes from '../pages/detailRecipes'
import firebaseConfig from '../utils/firebase/index'

console.log(firebaseConfig)

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<LandingPages />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/allrecipe' element={<AllRecipe />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/detail/:id' element={<DetailRecipes />} />
        </Routes>
    </Router>
  )
}

export default App
