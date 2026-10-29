const menuBtn = document.querySelector('#menuBtn');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('open');
});

const messageBox = document.querySelector('#message');
const charCount = document.querySelector('#count');

messageBox.addEventListener('input', function () {
  charCount.textContent = messageBox.value.length;
});