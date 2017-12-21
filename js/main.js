document.addEventListener('DOMContentLoaded', function() {

  var signIn = document.querySelector('button.signin'),
      modal = document.querySelector('.modal'),
      close = document.querySelector('.close'),
      inputFields = modal.querySelectorAll('.getstarted > input'),
      submit = modal.querySelector('button.submit');

  signIn.addEventListener('click', function() {
      modal.style.display = 'block';
  })

  close.addEventListener('click', function() {
      modal.style.display = 'none';
  })

  submit.addEventListener('click', function() {
    inputFields.forEach(function(input) {
      input.classList.add('error');
      input.addEventListener('focus', function() {
        this.classList.remove('error');
      });
      input.addEventListener('blur', function() {
        this.classList.add('error');
      })
    })
  })

  modal.addEventListener('click', function(e) {
    if (e.target.className != 'modal') return;
    this.style.display = 'none';
  })

});
