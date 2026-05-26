import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Welcome to PopX'
  }, [])

  return (
    <div className="screen-content">
      <div className="screen-panel landing-panel">
        <div className="headline-row">
          <h1>Welcome to PopX</h1>
          <p className="subtext">
            Build your profile, stay connected, and launch your brand with a
            clean mobile interface.
          </p>
        </div>

        <div className="action-group">
          <button className="primary-btn" onClick={() => navigate('/signup')}>
            Create Account
          </button>
          <button className="secondary-btn" onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing