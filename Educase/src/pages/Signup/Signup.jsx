import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Signup.css'

function Signup() {
  useEffect(() => {
    document.title = 'Create Account - PopX'
  }, [])
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes'
  })
  const navigate = useNavigate()

  const handleChange = event => {
    const { name, value } = event.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify({
      fullName: form.fullName,
      email: form.email
    }))
    navigate('/profile')
  }

  return (
    <div className="screen-content">
      <div className="screen-panel signup-panel">
        <div className="headline-row">
          <h1>Create your PopX account</h1>
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field-group">
            <span>Full Name</span>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
            />
          </label>

          <label className="field-group">
            <span>Phone number</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 234 567 890"
              required
            />
          </label>

          <label className="field-group">
            <span>Email address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
            />
          </label>

          <label className="field-group">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Choose a secure password"
              required
            />
          </label>

          <label className="field-group">
            <span>Company name</span>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="PopX Studio"
            />
          </label>

          <div className="field-group radio-group">
            <span>Are you an Agency?</span>
            <div className="radio-row">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={form.agency === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={form.agency === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button className="primary-btn" type="submit">
            Create Account
          </button>
        </form>

        <div className="footer-link">
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup