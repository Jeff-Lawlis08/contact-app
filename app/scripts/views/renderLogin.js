import $ from 'jquery';
import Backbone from 'backbone';

function renderLogin(user) {
// const loginHead = $(`<h3 class="loginHead">Login Here!</h3>`);
  const loginForm = $(`
    <h3 class="loginHead">Login Here!</h3>
    <form class="login">
      <input class="loginEmail" type="email" placeholder="email"></input>
      <input class="loginPassword" type="password" placeholder="password"></input>
      <input class="loginSubmit" type="submit"></input>
    </form>
    `);

    // $('.login').on('submit', function(e) {
    loginForm.on('submit', function(e) {
      e.preventDefault();
      console.log('you clicked');
      let  email = loginForm.find('.loginEmail').val();
      let  password = loginForm.find('.loginPassword').val();
      user.userLogin(email, password);
      // location.hash = 'contacts';
});
return loginForm;
}
export default renderLogin;
