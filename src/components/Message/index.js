/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? `Welcome User` : `Please Login`
  return <h1 className="text">{message}</h1>
}

export default Message
