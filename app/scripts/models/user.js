import $ from 'jquery';
import Backbone from 'backbone';
import Contact from './contact';
import router from '../router';


export default Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    name: '',
    email: '',
    'user-token': ''
  },
      userSignup(name, email, password) {
        this.save(
          {name, email, password},
          {
          url: 'https://api.backendless.com/v1/users/register',
          headers: {
            'application-id': '225A74F3-48BF-FE12-FF6A-7F83A8F8FD00',
            'secret-key': '4B61C78E-CB55-C2B6-FFCC-C9D23C29C100',
            'Content-Type':'application/json',
            'application-type': 'REST'
          },
          success: () => {
            this.userLogin(email, password);
          }

    });
},
      userLogin(login, password) {
        this.save(
          {login, password},
          {
          url: 'https://api.backendless.com/v1/users/login',
          headers: {
            'application-id': '225A74F3-48BF-FE12-FF6A-7F83A8F8FD00',
            'secret-key': '4B61C78E-CB55-C2B6-FFCC-C9D23C29C100',
            'Content-Type':'application/json',
            'application-type': 'REST'
          },
          success: (response) => {
            this.set(response);
            router.navigate('contacts', {trigger: true});
        },
        });
      },
      //this probably belongs in contact model

});
