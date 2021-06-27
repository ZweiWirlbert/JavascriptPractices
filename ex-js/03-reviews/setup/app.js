// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const job = document.querySelector("#job");
const author = document.querySelector("#author");
const info = document.querySelector("#info");
const image = document.querySelector("#person-img");

const buttons = document.querySelectorAll(".btn");

// khoi tao du lieu bat dau
let currenItem = 0;

// khoi tao du lieu khi trinh duyet load
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currenItem);
});

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("prev-btn")) {
      currenItem--;
      checkCurrenItem();
      showPerson();
    } else if (styles.contains("next-btn")) {
      currenItem++;
      checkCurrenItem();
      showPerson();
    } else {
      currenItem = getRandomNumber();
      showPerson();
    }
  });
});

function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}

function showPerson() {
  const item = reviews[currenItem];
  image.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function checkCurrenItem() {
  if (currenItem > reviews.length - 1) {
    currenItem = 0;
  } else if (currenItem < 0) {
    currenItem = reviews.length - 1;
  }
}
