import $ from 'jquery';
import Backbone from 'backbone';
import Contact from './contact';

let contact = new Contact();

export default Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    contacts: [],
  },
      userSignup(name, email, password) {
        this.save(
          {name, email, password},
          {success: function() {
            console.log('yay');
          },
          url: 'https://api.backendless.com/v1/users/register',
          headers: {
            'application-id': '225A74F3-48BF-FE12-FF6A-7F83A8F8FD00',
            'secret-key': '4B61C78E-CB55-C2B6-FFCC-C9D23C29C100',
            'Content-Type':'application/json',
            'application-type': 'REST'
          },

    });
},
      userLogin(login, password) {
        this.save(
          {login, password},
          {success: function() {
            console.log('logged in!');
        },
          url: 'https://api.backendless.com/v1/users/login',
          headers: {
            'application-id': '225A74F3-48BF-FE12-FF6A-7F83A8F8FD00',
            'secret-key': '4B61C78E-CB55-C2B6-FFCC-C9D23C29C100',
            'Content-Type':'application/json',
            'application-type': 'REST'
          },
        });
      },
      //this probably belongs in contact model
        makeNewContact(name, nickname, email, phone) {
          this.contact.save({name, nickname, email, phone},
             {success: function () {
               console.log('saved Contact');
              //  this.contacts.push(contact);
            },
            url: 'https://api.backendless.com/v1/users/login',
            headers: {
              'application-id': '225A74F3-48BF-FE12-FF6A-7F83A8F8FD00',
              'secret-key': '4B61C78E-CB55-C2B6-FFCC-C9D23C29C100',
              'Content-Type':'application/json',
              'application-type': 'REST'
            }
           });
  }
});
