export function login(username, password) {
  let user = {
    username,
    password
  };

  if (true) { 
    localStorage.setItem("userData", JSON.stringify(user.username));
    console.log({ info: 'login sucess' });
  } else {
    console.log({ info: 'login failed' });
  }

  return user;
}

export function register(username, password) {
  let user = {
    username,
    password
  };

  return user;
}

export function logOut() {
  if (isLogged()) {
    localStorage.removeItem("userData");
    return true;
  }

  return false;
}

export function getProfile() {
  if (isLogged()) {
    return localStorage.getItem("userData");
  }

  return false;
}

export function isLogged() {
  return localStorage.getItem("userData");
}
