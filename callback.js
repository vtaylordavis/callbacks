window.onload = function () {
  document.querySelector("#callback-btn").addEventListener("click", function () {
    console.log("User has clicked on the button!");
    setTimeout(() => {
      console.log("This message is shown after 3 seconds when user clicks the button.")
    }, 3000);
  })
}

const myPromise = new Promise((resolve, reject) => {
  let connection = false;

  if (connection) {
    resolve('Connection established');
  } else {
    reject('Connection refused');
  }
});

myPromise.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});
