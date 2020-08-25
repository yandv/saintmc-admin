export function login(username, password) {
  let user = {
    username: "yandv",
  };

  localStorage.setItem("userData", JSON.stringify(user));
  console.log("success");

  return user;
}

export function register(username, password) {
  let user = {
    username: "yandv",
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
    let userData = localStorage.getItem("userData");
    let { data } = userData;

    return data;
  }

  return {};
}

export function isLogged() {
  return localStorage.getItem("userData");
}
