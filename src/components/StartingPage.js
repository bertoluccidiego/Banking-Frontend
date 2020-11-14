import { useState } from 'react';

import Login from './Login';
import CreateUser from './CreateUser';

function StartingPage () {
  const [showCreateUser, setShowCreateUser] = useState(false);

  return (
    <div className='StartingPage'>
      <h2>Banking App</h2>
      {showCreateUser
       ? <CreateUser setShowCreateUser={setShowCreateUser} />
       : <Login setShowCreateUser={setShowCreateUser} />
      }
    </div>
  )
}

export default StartingPage;
