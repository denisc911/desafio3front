import { useSelector } from "react-redux"

export default function Profile () {
  
  const {user} = useSelector((state) => state.auth)

  return (
    <>
      <h1>Profile</h1>
      <p>{user.firstName}</p>
      <p>{user.email}</p>
      <img src='' alt="" /> 
    </>
  )
}