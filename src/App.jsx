import { useState } from 'react'
import { LoginAdmin } from './assets/LoginAdmin/LoginAdmin'
import { LoginTeacher } from './assets/LoginTeacher/LoginTeacher'
import { Dashboard } from './assets/AccountsAdmin/Dashboard'
import Classes from './assets/DashboardTeacher/LesClasses'
import ListeClasses from './assets/DashboardTeacher/ListeDeClasse'
import ADDChild from './assets/DashboardTeacher/ajoutEnfant'
import CoursTeacher from './assets/DashboardTeacher/cours'
import Quiz from './assets/DashboardTeacher/Quiz'
import Kid from './assets/KidsPages/KidsPages/QuizKid/DashboradQuiz'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Kid />} />
          {/*<Route path="/" element={<LoginTeacher />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/class-details/:className" element={<ListeClasses />} />
          <Route path="/ajouter-enfant" element={<ADDChild />} />
          <Route path="/cours" element={<CoursTeacher />} />
          <Route path="/quiz" element={< Quiz />} />*/}
        </Routes>
      </Router>
      {/*<LoginAdmin/>
      <Dashboard/>
      */}

    </>
  )
}

export default App
