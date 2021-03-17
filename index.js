console.log("Before");
getUser(1, workWithUser);
console.log("After");

function workWithUser(user) {
  getRepo(user.username, displayRepos);
}

function displayRepos(repos) {
  console.log(repos);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from database...");
    callback({ id: 1, username: "Mosh" });
  }, 2000);
}

function getRepo(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
