import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Navbar = () => {

  const [state, setState] = useState({active:0});

    return (
      <nav className="navbar navbar-expand-lg color-white bg-dark border-bottom border-body sticky" data-bs-theme="dark">
        <div className="container-fluid navbaar-padding">
          <Link style={{padding:"10px 0"}} className="navbar-brand" to="/">News Monkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex gap-4">
              <li className="nav-item">
                <Link className={`nav-link ${state.active===0? "active": ""}`} aria-current="page" onClick={()=>setState({active:0})} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${state.active===1? "active": ""}`} onClick={()=>setState({active:1})} to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${state.active===2? "active": ""}`} onClick={()=>setState({active:2})} to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${state.active===4? "active": ""}`} onClick={()=>setState({active:4})} to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${state.active===5? "active": ""}`} onClick={()=>setState({active:5})} to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${state.active===6? "active": ""}`} onClick={()=>setState({active:6})} to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${state.active===7? "active": ""}`} onClick={()=>setState({active:7})} to="/Technology">Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
