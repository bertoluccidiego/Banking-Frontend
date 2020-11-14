import axios from 'axios';

const URL = '/login';

async function login (userCredentials) {
  try {
    const response = await axios.post(URL, userCredentials);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export default {
  login,
};

