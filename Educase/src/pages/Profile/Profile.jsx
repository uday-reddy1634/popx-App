import { useState, useEffect } from 'react'
import './Profile.css'

function Profile() {
  const [user, setUser] = useState({
    fullName: 'Marry Doe',
    email: 'Marry@gmail.com'
  })

  useEffect(() => {
    document.title = 'Account Settings - PopX'

    const savedUser = localStorage.getItem('userData')

    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const getInitial = () => user.fullName.charAt(0).toUpperCase()

  return (
    <div className="screen-content">
      <div className="screen-panel profile-panel">
        <div className="header-bar">
          <h1>Account Settings</h1>
        </div>

        <div className="profile-card">
          <div className="profile-top">
            <div className="avatar-shell">
              <div className="avatar">
                <span className="avatar-text">{getInitial()}</span>
              </div>

              <div className="avatar-badge"></div>
            </div>

            <div className="profile-copy">
              <h2>{user.fullName}</h2>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>

          <p className="profile-description">
            "Lead UI/UX Designer specializing in accessible, mobile-first experiences. I bridge the gap between complex technical requirements and beautiful, user-centric design."
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile