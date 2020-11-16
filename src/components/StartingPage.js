import { useState, useEffect } from 'react';

import Login from './Login';
import CreateUser from './CreateUser';
import LoggedinUser from './LoggedinUser';

function StartingPage() {
  const [username, setUsername] = useState('');
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    (async () => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
        setUsername(userData.username);
        setLoggedin(true);
      }
    })();
  }, []);

  function loggedOffUserView() {
    return showCreateUser ? (
      <CreateUser setShowCreateUser={setShowCreateUser} />
    ) : (
      <Login
        setShowCreateUser={setShowCreateUser}
        setLoggedin={setLoggedin}
        username={username}
        setUsername={setUsername}
      />
    );
  }

  function loggedInUserView() {
    return <LoggedinUser username={username} setLoggedin={setLoggedin} />;
  }

  return (
    <div className="StartingPage">
      <h2>Banking App</h2>
      {loggedin ? loggedInUserView() : loggedOffUserView()}
    </div>
  );
}

export default StartingPage;
