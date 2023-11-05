import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPages from "../pages/landingPages"
import Login from '../pages/auth/login'
import SignUp from '../pages/auth/signup'
import AllRecipe from '../pages/allRecipe'
import AddEditResep from '../pages/addEditResep'
import AIPage from '../pages/openAI'
import About from '../pages/about'

function App() {

  return (
    <Router>
      <Routes>
          <Route path='/landingpages' element={<LandingPages />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/allrecipe' element={<AllRecipe />} />
          <Route path='/add' element={<AddEditResep />} />
          <Route path='/update/:id' element={<AddEditResep />} />
          <Route path='/openai' element={<AIPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  )
}

export default App
