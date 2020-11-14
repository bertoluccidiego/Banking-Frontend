function LoggedinUser ({ username, setLoggedin }) {
  function logoutHandler () {
    setLoggedin(false);
  }

  return (
    <div className='LoggedinUser'>
      <h3>Welcome {username}!</h3>
      <h5>Account</h5>
      <h5>Movements</h5>
      <button type='button' name='logout' onClick={logoutHandler}>logout</button>
    </div>
  )
}

export default LoggedinUser;
