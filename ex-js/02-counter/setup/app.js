// khoi tao bien dem
let count = 0;

// chon value va cac nut

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    value.style.color = checkValue();
    value.textContent = count;
  });
});

function checkValue() {
  if (count > 0) {
    return "green";
  } else if (count == 0) {
    return "black";
  } else {
    return "red";
  }
}
