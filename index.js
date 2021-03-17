console.log("Before");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, username: "Mosh" });
    }, 2000);
  });
}

function getRepo(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

// Consuming Promises
getUser(1)
  .then((user) => getRepo(user.username))
  .then((repos) => console.log(repos))
  .catch((err) => console.log("Error: ", err.message));

console.log("After");
