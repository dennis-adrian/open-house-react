function UserInfo() {
  const name = localStorage.getItem('name');
  const photoUrl = localStorage.getItem('photoURL');

  return (
    <div className="user-info">
      <h2>{name}</h2>
      <img className="user-image" src={photoUrl || ''} alt="imagen de usuario" />
    </div>
  )
}

export default UserInfo;