import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../assets/css/login.css'
import Input from './subcomponents/input/Input'
import InputPassword from './subcomponents/inputPassword/InputPassword'
import Button from './subcomponents/button/Button'

export default function Login() {

    const [loginError, setLoginError] = useState("");

    const navigate = useNavigate();
    async function handleLoginSubmit(e) {
    e.preventDefault();
    var user = {
      loginUsername: document.querySelector("#loginUsername").value,
      loginPassword: document.querySelector("#loginPassword").value
    };
    try {
      const res = await fetch("http://localhost:3000/api/usuarios/adminlogin", {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });
      if(!res.ok) throw new Error()
      localStorage.setItem("auth", process.env.REACT_APP_AUTH_TOKEN)
      navigate("/")
    } catch(error) {
        setLoginError("Invalid credentials")
    }
  }

  return (
    <div className='loginMain'>
        <form className='loginForm' onSubmit={handleLoginSubmit}>
            
            <div className='loginFormHeader'>
                <h2 className='loginFormTitle'>Login</h2>
                <h3 className='loginFormErrorMsg'> {loginError} </h3>
            </div>
            
            <div className='loginInputsDiv'>
                <Input/>
                <InputPassword/>
            </div>

            <div className='loginBtnDiv'>
                <Button/>
            </div>

      </form>
    </div>
  )
}
