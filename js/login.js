document.getElementById('login-submit').addEventListener('click', function () {

   // formsubmit...............
   const formSubmit = document.getElementById('form-submit');
   // ........................
   const formSubmitLogin = formSubmit.value;

   //  pass submit..............
   const passwordSubmit = document.getElementById('password-submit');
   // ........................
   const passwordSubmitLogin = passwordSubmit.value;

   if (passwordSubmitLogin == 12345) {
      window.location.href = 'bank.html';
      console.log('valid')
   }

   else {
      alert('invalid password or email');
   }
})