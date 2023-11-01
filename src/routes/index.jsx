import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPages from "../pages/landingPages"
import Login from '../pages/auth/login'
import SignUp from '../pages/auth/signup'
import AllRecipe from '../pages/allRecipe'
import Profile from '../pages/profile'
import AddEditResep from '../pages/addEditResep'
import Detail from '../pages/detail'
import Modal from '../components/Modal/Modal'

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/landingpages' element={<LandingPages />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/allrecipe' element={<AllRecipe />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/add' element={<AddEditResep />} />
          <Route path='/update/:id' element={<AddEditResep />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/modal' element={<Modal />} />
        </Routes>
    </Router>
  )
}

export default App
