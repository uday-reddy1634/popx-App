import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing.jsx'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signuptemp/Signup.jsx'
import Profile from './pages/Profile/Profile.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <div className="mobile-shell">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App