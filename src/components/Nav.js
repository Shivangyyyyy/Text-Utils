import React from 'react'
import PropTypes from 'prop-types'


function Nav(props) {
  return (
    <nav className ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className ="container-fluid">
      <img src='https://user-images.githubusercontent.com/94471189/193782622-db0071f8-122e-4909-83a8-fe5da257febc.png' width="6%" height="6%" alt='logo'/>
      <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className ="navbar-toggler-icon"></span>
      </button>
      <div className ="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
          <li className ="nav-item">
            <a className ="nav-link active" aria-current="page" href="/">{props.title}</a>
          </li>
          <li className ="nav-item">
            <a className ="nav-link" href="/"></a>
          </li>
          <li className ="nav-item dropdown">
            <a className ="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            
            <ul className ="dropdown-menu">
              <li><a className ="dropdown-item" href="/">Action</a></li>
              <li><a className ="dropdown-item" href="/">Another action</a></li>
              <li><hr className ="dropdown-divider"/></li>
              <li><a className ="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className ="nav-item">
            <a className ="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        {/* <form className ="d-flex" role="search">
          <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className ="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
Nav.propTypes ={
  title : PropTypes.string ,
  aboutText : PropTypes.string,

}

export default Nav