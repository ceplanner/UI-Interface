const loginButton = document.querySelector('.login-button');

loginButton.addEventListener('click', () => {
    window.location.assign('https://ceplanner.herokuapp.com/login');
});