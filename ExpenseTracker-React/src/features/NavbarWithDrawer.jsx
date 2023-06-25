import React from 'react'

const NavbarWithDrawer = () => {
  return (
    <div className="navContainer">
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand fs-1 me-5" href="#">Expense Tracker</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link fs-3 me-3" aria-current="page" href="#">Home</a>
        <a className="nav-link fs-3 me-3" href="#">Financial History</a>
        <a className="nav-link fs-3 me-3" href="#">Budget Planner</a>
        <a className="nav-link fs-3 me-3" href='#'>Account</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarWithDrawer