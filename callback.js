// var button = document.getElementById("nut");

// button.addEventListener("click", function () {
//   console.log("you've clicked this button...");
// });

// setTimeout(function () {
//   let kq = 0;
//   for (var i = 0; i < 300000000; i++) {
//     kq = kq + i;
//   }
//   console.log(kq);
// }, 3000);

// console.log("end of code");

//

function truoc(callback) {
  setTimeout(function () {
    console.log("this is task 1");
    // ham sau() duoc goi tai day
    callback();
  }, 2000);
}

// thuc thi sau khi duoc goi tu ham truoc
function sau() {
  setTimeout(function () {
    console.log("this is task 2");
  }, 1000);
}

console.log("this is task 3 ");

truoc(sau);
