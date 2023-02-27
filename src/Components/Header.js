// Header Component:
import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    const { isLoggedIn, handleLogout } = props;

    return (
// Navigation bar with links to different pages.
// The navigation bar is created using Bootstrap classes and contains links to different pages of the application. If the user is not logged in, the login and registration links are displayed, and if the user is logged in, the user's name and a logout button are displayed.

       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container">
            <Link className="navbar-brand" to="/">My Portfolio</Link>
            <button className="navbar-toggler"type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/skills">Skills</Link>

                    </li>
                    {/* Login and registration links. */}

                    {!isLoggedIn &&(
                        <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        </>
                    )}
                    {/* User authentication state and logout button if the user is logged in. */}
                    {/* the Header Component receives two props: isLoggedIn, which is a boolean that indicates whether the user is authenticated or not, and handleLogout, which is a function that logs the user out of the application. */}

                    {isLoggedIn && (
                        <>
                        <li className="nav-item">
                            <span className="nav-link">Welcome,User!</span>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                        </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
       </nav>
    )
}

export default Header

