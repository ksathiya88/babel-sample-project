let promiseObj = Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

promiseObj.then(
  () => {
    console.log("Promise success");
  },
  () => {
    console.log("Promise Failed");
  }
);
