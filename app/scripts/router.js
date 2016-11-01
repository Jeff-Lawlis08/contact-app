import $ from 'jquery';
import Backbone from 'backbone';
import User from './models/user';
import Users from './collections/users';
import renderLogin from './views/renderLogin';
import renderSignup from './views/renderSignup';
import renderContactForm from './views/renderContactForm';
import renderContactList from './views/renderContactList';


const user = new User();
const container = $('.container');

const Router = Backbone.Router.extend({
  routes: {
    ''        : 'home',
    'contacts': 'contacts'
  },
  home() {
container.append(renderLogin(user));
container.append(renderSignup(user));
  },
  contacts() {
    container.empty();
    container.append(renderContactForm(user));

  }
});



const router = new Router();

export default router;
