import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPages from "../pages/landingPages"
import Login from '../pages/auth/login'
import SignUp from '../pages/auth/signup'
import AllRecipe from '../pages/allRecipe'
import Profile from '../pages/profile'
import DetailRecipes from '../pages/detailRecipes'
import { useState } from 'react';

function App() {
  const [ reseps, setReseps ] = useState([
    {
      id: 1,
      nama: "Sup Iga",
      deskripsi: "Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ...",
      bahan: "example",
      buat:"example",
      image:"example3"
    },
    {
      id: 2,
      nama: "Es Selendang Mayang",
      deskripsi: "Es selendang mayang isinya mirip seperti puding atau kue lapis yang terbuat dari tepung sagu ...",
      bahan: "example",
      buat:"example",
      image:"example3"
    }
  ])

  return (
    <Router>
      <Routes>
          <Route path='/' element={<LandingPages />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/allrecipe' element={<AllRecipe reseps={reseps} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/detail/:id' element={<DetailRecipes reseps={reseps} />} />
        </Routes>
    </Router>
  )
}

export default App
