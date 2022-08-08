import './inputpassword.css'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

export default function InputPassword(props) {

    const togglePasswordVisibility = (e) => {
        var on = document.querySelector(".viewPassword");
        var off = document.querySelector(".hidePassword");
        var input = document.querySelector(".inputPasswordComponentInput");
        if (input.type === "password") {
            off.style.display = "flex"
            on.style.display = "none"
            input.type = "text";
        } else {
            off.style.display = "none"
            on.style.display = "flex"
            input.type = "password";
        }
    }

  return (
    <div className='inputPasswordComponentDiv'>

      <input
        autoComplete="off"
        minLength="4"
        maxLength="30"
        placeholder="Password:"
        type="password"
        name="loginPassword"
        className='inputPasswordComponentInput'
        id="loginPassword"
        required
      />
      
      <label className='inputPasswordComponentLabel'>
        Password
      </label>
      <AiFillEye onClick={(e) => togglePasswordVisibility(e.target)} className='viewPassword'/>
      <AiFillEyeInvisible onClick={(e) => togglePasswordVisibility(e.target)} className='hidePassword'/>
    </div>
  )
}