import { useState } from 'react';

import usersServices from '../services/users';

function CreateUser({ setShowCreateUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function createUserHandler() {
    const createdUser = await usersServices.createUser({ username, password });
    console.log('user created');
    console.log(createdUser);

    setUsername('');
    setPassword('');

    setShowCreateUser(false);
  }

  return (
    <div className="CreateUser">
      <h3>Create an user</h3>
      <form>
        <div>
          {'username '}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          {'password '}
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="button"
            name="cancel"
            onClick={() => setShowCreateUser(false)}
          >
            cancel
          </button>
          <button type="button" name="create" onClick={createUserHandler}>
            create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
