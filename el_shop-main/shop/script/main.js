'use strict';

// document.querySelector('search').oninput = function() {
//   let val = this.value.trim();
//   let searchItems = document.querySelectorAll('.card card__title');

//   if (searchItems != '') {
//     searchItems.forEach(function(elem) {
//       if (elem.innerText.search(val) == -1) {
//         elem.classList.add('hide');
//       }
//     })
//   }
// }



const modalWindow = document.querySelector('.modal__window');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const overlay = document.querySelector('.overlay');

const titleModalWindow = document.querySelector('.title__modal-window');
const descriptionModalWindow = document.querySelector('.description__modal-window');

const textForTitleModalWindow1 = "О нас";
const textForDescriptionModalWindow1 = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Единственное все правилами снова вершину!";

const textForTitleModalWindow2 = "Лицензионное соглашение";
const textForDescriptionModalWindow2 = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Единственное все правилами снова вершину!";

const textForTitleModalWindow3 = "Пользовательское соглашение";
const textForDescriptionModalWindow3 = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Единственное все правилами снова вершину!";


const OpenModalWindow = (btnModalWindow) => {
  switch (btnModalWindow) {
    case "about-us":
      titleModalWindow.innerHTML = textForTitleModalWindow1;
      descriptionModalWindow.innerHTML = textForDescriptionModalWindow1;
      modalWindow.classList.remove('hidden');
      overlay.classList.remove('hidden');
      break;
    case "license-agreement":
      titleModalWindow.innerHTML = textForTitleModalWindow2;
      descriptionModalWindow.innerHTML = textForDescriptionModalWindow2;
      modalWindow.classList.remove('hidden');
      overlay.classList.remove('hidden');
      break;
    case "terms-of-use":
      titleModalWindow.innerHTML = textForTitleModalWindow3;
      descriptionModalWindow.innerHTML = textForDescriptionModalWindow3;
      modalWindow.classList.remove('hidden');
      overlay.classList.remove('hidden');
      break;
  }
};

btnCloseModalWindow.addEventListener('click', function() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});




// Логика слайдера 
let slideIndex = 1;
let timer;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(timer);
  timer = setInterval(function() {
    plusSlides(1);
  }, 2000); // Измените время для изменения слайдов (в данном случае 2000 миллисекунд)
}

function toggleAutoplay() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(function() {
      plusSlides(1);
    }, 2000);
  }
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slaider_photo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}