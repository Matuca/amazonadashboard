import './button.css'

/*  MANDATORY PROPS
    <Button
      type=""
      text=""
      id=""
    />
*/

export default function Button() {
  return (
    <button
        className='buttonComponent' 
        type="submit"
    >
        Submit
    </button>
  )
}
