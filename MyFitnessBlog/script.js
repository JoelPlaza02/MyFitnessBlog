// Mobile Menu Section
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-links');
const button = document.getElementById('sign-up-btn');
const toast = document.getElementById('toast');
const sign = document.querySelector('.hero-section');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  socialLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));


// Email Notification Section
function message() {
  const email = document.getElementById('email');
  const success = document.getElementById('success');
  const error = document.getElementById('error');

  if (email.value === '') {
    error.style.display = 'block';
  } else {
    setTimeout(() => {
      email.value = '';
    }, 2000);

    success.style.display = 'block';
  }

  setTimeout(() => {
    error.style.display = 'none';
    success.style.display = 'none';
  }, 4000);
}

/* Arrow Button Slide Section */
const trendingCard = [...document.querySelectorAll('.trending-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

trendingCard.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

/* Save Article Notification Section */
function saveNoti() {
const saveBtn = document.getElementById('hover-save-btn');
const saveBtnTwo = document.getElementById('hover-save-btn2');
const saveBtnThree = document.getElementById('hover-save-btn3');
const saveBtnFour = document.getElementById('hover-save-btn4');
const saveBtnFive = document.getElementById('hover-save-btn5');
const saveBtnSix = document.getElementById('hover-save-btn6');
const saveBtnSeven = document.getElementById('hover-save-btn7');
const saveBtnEight = document.getElementById('hover-save-btn8');
const saveBtnNine = document.getElementById('hover-save-btn9');

saveBtn.addEventListener('click', () => {
  alert("You have successfully saved the article!");;
  });

saveBtnTwo.addEventListener('click', () => {
  alert("You have successfully saved the article!");
});

saveBtnThree.addEventListener('click', () => {
  alert("You have successfully saved the article!");
});

saveBtnFour.addEventListener('click', () => {
  alert("You have successfully saved the article!");
});

saveBtnFive.addEventListener('click', () => {
  alert("You have successfully saved the article!");
});

saveBtnSix.addEventListener('click', () => {
  alert("You have successfully saved the article!");
});

saveBtnSeven.addEventListener('click', () => {
  alert("You have successfully saved the article!");
});

saveBtnEight.addEventListener('click', () => {
  alert("You have successfully saved the article!");
});

saveBtnNine.addEventListener('click', () => {
  alert("You have successfully saved the article!");
});
}

/* Load More Articles Button Section */
function loadMore() {
let loadMoreBtn = document.getElementById('load-more-btn');
let loadMoreCards = document.querySelector('.load-more-cards');

loadMoreBtn.addEventListener('click', () => {
  loadMoreCards.style.display = 'block';
});
}