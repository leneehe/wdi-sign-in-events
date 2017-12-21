document.addEventListener('DOMContentLoaded', function() {

  var signIn = document.querySelector('button.signin'),
      modal = document.querySelector('.modal'),
      close = document.querySelector('.close');

  signIn.addEventListener('click', function() {
      modal.style.display = 'block';
  })

  close.addEventListener('click', function() {
      modal.style.display = 'none';
  })

});
