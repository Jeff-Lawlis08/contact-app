import $ from 'jquery';
import Backbone from 'backbone';
import User from './models/user';
import Users from './collections/users';
import renderLogin from './views/renderLogin';
import renderSignup from './views/renderSignup';
import renderContactForm from './views/renderContactForm';
import renderContactList from './views/renderContactList';
import Contact from './models/contact';
import Contacts from './collections/contacts';


const user = new User();
const contacts = new Contacts();
const container = $('.container');


const Router = Backbone.Router.extend({
  routes: {
    ''        : 'home',
    'contacts': 'contacts',
    'contacts/:objectId': 'viewContact'
  },
  home() {
    if(user.get('user-token')) {
    this.navigate('', {trigger: true});
  }
container.append(renderLogin(user));
container.append(renderSignup(user));
  },
  contacts() {
    if(!user.get('user-token')) {
      this.navigate('', {trigger: true});
    } else {

    contacts.fetch({
      url: 'https://api.backendless.com/v1/data/contacts',
      headers: {
      'application-id': '225A74F3-48BF-FE12-FF6A-7F83A8F8FD00',
      'secret-key': '4B61C78E-CB55-C2B6-FFCC-C9D23C29C100',
      'Content-Type':'application/json',
      'application-type': 'REST'
    }
    });
    container.empty();
    container.append(renderContactForm(contacts));
    container.append(renderContactList(contacts));
}
  },
  viewContact() {
    if(!user.get('user-token')) {
      this.navigate('', {trigger: true});
    } else {
      container.empty();
      container.append(renderViewContact(contacts));
    }
  }
});



const router = new Router();

export default router;
