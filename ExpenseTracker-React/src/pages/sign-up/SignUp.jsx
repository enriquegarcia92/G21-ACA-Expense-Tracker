import React from 'react'
import '../sign-up/SignUp.scss'

function SignUp() {
  return (
    <div className="pageContainer">
      <div className="registerBlock">
        <form action="" className='registerForm'>
          <h1>Register an account</h1>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i class="bi bi-person-circle"></i>
            </span>
            <input type="text" class="form-control" placeholder="Name"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-envelope"></i>
            </span>
            <input type="text" class="form-control" placeholder="Email"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-shield-lock"></i>
            </span>
            <input type="password" class="form-control" placeholder="Choose your password"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-shield-lock"></i>
            </span>
            <input type="password" class="form-control" placeholder="Confirm your password"/>
          </div>
          <button className='btn btn-primary'>Sign up <i className="bi bi-check-circle"></i></button>
        </form>
      </div>
      <div className="greenBlock">
      </div>
    </div>
  )
}

export default SignUp