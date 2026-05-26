import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'

function Login() {
  useEffect(() => {
    document.title = 'Signin - PopX'
  }, [])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const isFormValid = email.trim() && password.trim()

  const handleSubmit = event => {
    event.preventDefault()
    if (isFormValid) {
      navigate('/profile')
    }
  }

  return (
    <div className="screen-content">
      <div className="screen-panel">
        <div className="headline-row">
          <h1>Signin to your PopX account</h1>
          <p className="subtext">
            Enter your credentials to continue and access your personalized
            workspace.
          </p>
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field-group">
            <span>Email Address</span>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="field-group">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>

          <button
            className={`secondary-btn login-btn ${isFormValid ? 'active' : ''}`}
            type="submit"
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>

        <div className="footer-link">
          <span>New here?</span>
          <Link to="/signup">Create account</Link>
        </div>
      </div>
    </div>
  )
}

export default Login