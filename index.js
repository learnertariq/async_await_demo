console.log("Before");

// Promise based approach
// getUser(1)
//   .then((user) => getRepo(user.username))
//   .then((repos) => console.log(repos))
//   .catch((err) => console.log("Error: ", err.message));

// Async and Await based approach
async function asyncAwaitfn() {
  const user = await getUser(1);
  const repos = await getRepo(user.username);
  console.log(repos);
}

asyncAwaitfn();

console.log("After");

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
