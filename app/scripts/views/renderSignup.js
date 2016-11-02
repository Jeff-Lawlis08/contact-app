import $ from 'jquery';
import Backbone from 'backbone';

function renderSignup(user) {
    // <h3 class="signupHead">Sign Up Here!</h3>
  // const signupHeader = $(`
  //   <h3 class="signupHead>Sign Up Here!"
  //   </h3>
  //   `);
  const signupForm = $(`
    <h5>No Account Yet?</h5>
    <h3 class="signupHead">Sign Up Here!
    </h3>
    <form class="signup">
      <input class="signupName" type="text" placeholder="Username"></input>
      <input class="signupEmail" type="email" placeholder="email"></input>
      <input class="signupPassword" type="password" placeholder="password"></input>
      <input class="signupSubmit" type="submit"></input>
    </form>
    `);

        signupForm.on('submit', function(e) {
        e.preventDefault();
        console.log('you clicked signupForm');
        let name = signupForm.find('.signupName').val();
        let email = signupForm.find('.signupEmail').val();
        let password = signupForm.find('.signupPassword').val();
      user.userSignup(name, email, password);

    });
  return signupForm;
}
export default renderSignup;
