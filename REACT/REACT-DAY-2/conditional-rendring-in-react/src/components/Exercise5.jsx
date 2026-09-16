function UserProfile({ user }) {
  return user==null?<p>No user data</p>:<p>{user.name} — {user.email}</p>
}

export default UserProfile