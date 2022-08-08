import './input.css'

export default function Input(props) {

  return (
    <div className='inputComponentDiv'>

      <input
        minLength="4"
        maxLength="30"
        placeholder="Username:"
        type="text"
        name="loginUsername"
        autoComplete="off"
        className='inputComponentInput'
        id="loginUsername"
        required
      />
      
      <label className='inputComponentLabel'>
        Username
      </label>

    </div>
  )
}