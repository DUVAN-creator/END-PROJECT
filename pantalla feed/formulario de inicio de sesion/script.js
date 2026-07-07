const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  console.log('Datos enviados:', { email, password });
});