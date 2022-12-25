import axios from "axios";

export const userService = {
  login,
};

async function getRequestToken() {
  var result;
  await axios.get(`${process.env.VUE_APP_API_URL}/authentication/token/new?api_key=${process.env.VUE_APP_API_KEY}`)
    .then(response => {
      result = response.data;
    })
    .catch(error => {
      result = { success: false, errorMessage: "Cant get request token" }
      console.log("Error: " + error);
    });
  return result;
}

async function checkValidUser(param) {
  var result;
  await axios.post(`${process.env.VUE_APP_API_URL}/authentication/token/validate_with_login?api_key=${process.env.VUE_APP_API_KEY}`, param)
    .then(response => {
      result = response.data;
    })
    .catch(error => {
      result = { success: false, errorMessage: "Invalid username and/or password." }
      console.log("Error: " + error);
    });
  return result;
}

async function getUserSession(reqToken) {
  var result;
  await axios.post(`${process.env.VUE_APP_API_URL}/authentication/session/new?api_key=${process.env.VUE_APP_API_KEY}`, { request_token: reqToken.request_token })
    .then(response => {
      result = response.data;
    })
    .catch(error => {
      result = { success: false, errorMessage: "Get user's section error." }
      console.log("Error: " + error);
    });
  return result;
}

async function login(username, password) {
  try {
    var reqToken = await getRequestToken();
    if (!reqToken.success) {
      return reqToken;
    }
    const param = {
      username: username,
      password: password,
      request_token: reqToken.request_token
    }
    const validUser = await checkValidUser(param);
    if (!validUser.success) {
      return validUser;
    }
    const userSection = await getUserSession(reqToken);
    if (!userSection.success) {
      return userSection;
    }
    localStorage.setItem('request_token', reqToken.request_token);
    localStorage.setItem('expires_at', reqToken.expires_at);
    localStorage.setItem('session_id', userSection.session_id);
    return { success: true, section_id: userSection.session_id };
  } catch {
    console.log('Error: Login error.');
  }
}
