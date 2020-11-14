import { useState } from 'react';

import Login from './Login';
import CreateUser from './CreateUser';
import LoggedinUser from './LoggedinUser';

function StartingPage () {
  const [username, setUsername] = useState('');
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [loggedin, setLoggedin] = useState(false);

  function loggedOffUserView () {
    return (
      showCreateUser
        ? <CreateUser setShowCreateUser={setShowCreateUser} />
        : <Login 
           setShowCreateUser={setShowCreateUser}
           setLoggedin={setLoggedin}
           username={username}
           setUsername={setUsername}
          />
    )
  }

  function loggedInUserView () {
    return <LoggedinUser username={username} setLoggedin={setLoggedin} />;
  }

  return (
    <div className='StartingPage'>
      <h2>Banking App</h2>
    {
      loggedin
      ? loggedInUserView()
      : loggedOffUserView()
      }
    </div>
  )
}

export default StartingPage;
