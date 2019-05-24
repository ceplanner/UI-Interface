const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');
const navLogo = document.querySelector('.logo');


navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('change');
  navLinks.classList.toggle('show');
});

navLogo.addEventListener('click', () => {
  window.location.assign('./index.html');
})