const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');


navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('change');
  navLinks.classList.toggle('show');
});