import axios from "axios";

export const userService = {
  login,
};

async function getRequestToken() {
  var result;
  const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/authentication/token/new`
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.get(url, options)
    .then(response => {
      result = response.data;
    })
    .catch(error => {
      result = { success: false, errorMessage: "Cannot get request token" }
      console.log("Error: " + error);
    });
  return result;
}

async function checkValidUser(param) {
  var result;
  const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/authentication/token/validate_with_login`
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.post(url, param, options)
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
  const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VERSION}/authentication/session/new`
  const params = {
    request_token: reqToken.request_token
  }
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
    }
  }
  await axios.post(url, params, options)
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
