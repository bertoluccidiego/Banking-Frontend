import { useState } from 'react';

import loginServices from '../services/login';

function Login ({ setShowCreateUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function loginHandler () {
    const loggedinUser = await loginServices.login({ username, password });
    console.log('user loged in');
    console.log(loggedinUser);

    setUsername('');
    setPassword('');
  }

  return (
    <div className='Login'>
      <h3>Login</h3>
      <form>
        <div>
          username <input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        password <input type='text' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
        <button type='button' name='log in' onClick={loginHandler}>log in</button>
        </div>
        <button type='button' name='sign up' onClick={() => setShowCreateUser(true)}>sign up</button>
      </form>
    </div>
  );
}

export default Login;
