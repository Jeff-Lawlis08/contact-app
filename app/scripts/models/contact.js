import $ from 'jquery';
import Backbone from 'backbone';

// let user = new User();

export default Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: '',
    nickname: '',
    email: '',
    phone: '',
  },

  // makeNewContact(name, nickname, email, phone) {
  //   this.create({name, nickname, email, phone},
  //      {success: function () {
  //        console.log('saved Contact');
  //       //  this.contacts.push(contact);
  //     },
  //     url: 'https://api.backendless.com/v1/data/contacts',
  //     headers: {
  //       'application-id': '225A74F3-48BF-FE12-FF6A-7F83A8F8FD00',
  //       'secret-key': '4B61C78E-CB55-C2B6-FFCC-C9D23C29C100',
  //       'Content-Type':'application/json',
  //       'application-type': 'REST'
  //     }
  //    });
// }
     });

// });
