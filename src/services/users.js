import axios from 'axios';

const URL = '/users';

async function createUser (userCredentials) {
  try {
    const response = await axios.post(URL, userCredentials);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default {
  createUser,
};
