const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1);
    reject(new Error("p1 rejected"));
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    // reject(new Error("p2 rejected"));
  }, 2000);
});

// all => wait until all operations to complete
// race => wait untill one of them is completed

Promise.race([p1, p2])
  .then((resultArray) => console.log(resultArray))
  .catch((err) => console.log("Error", err.message));
