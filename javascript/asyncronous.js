// Callbacks
function ConnectToServer(cbfn) {
  console.log("connecting to server...");
  setTimeout(() => {
    console.log("connected to server.");
    cbfn();
  }, 3000);
}

function fetchCourses(cbfn) {
  console.log("courses fetching");
  setTimeout(() => {
    cbfn(["frontend", "backend", "dsa"]);
  }, 1000);
}

ConnectToServer(function () {
  fetchCourses(function (data) {
    console.log(data);
  });
});


// 
