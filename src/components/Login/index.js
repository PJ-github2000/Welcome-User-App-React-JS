/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
// Write your code here
import './index.css'

const Login = props => {
  const {login} = props
  return (
    <button type="button" className="button-login" onClick={login}>
      Login
    </button>
  )
}
export default Login
