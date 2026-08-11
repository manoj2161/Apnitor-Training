function Role({ role }) {
if(role==="admin"){
  return <>
  <h1>Welcome Admin</h1> 
  <button>Delete Post</button>
  </>}
  if(role==="editor"){
  return <>
  <h1>Welcome Editor</h1> 
  <button>Edit Post</button>
  </>}
  if(role==="viewer"){
  return <>
  <h1>Welcome User</h1> 
  <button>View Post</button>
  </>}
  
}
export default Role