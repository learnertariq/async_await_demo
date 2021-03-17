// const settledPromise =  Promise.resolve({ id: 1, name: 'Mosh'});
const settledPromise = Promise.reject(new Error("Reason for rejection......"));
settledPromise.catch((err) => console.log(err));
