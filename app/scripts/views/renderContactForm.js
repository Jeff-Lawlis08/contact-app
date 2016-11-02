import $ from 'jquery';
import Backbone from 'backbone';

function renderContactForm(contacts, user) {
  const contactForm = $(`
    <h3 class="contact-formHead">Create New Contact: </h3>
    <form class="contact-form">
      <input class="name" type="text" placeholder="Full Name">
      </input>
      <input class="nickname" type="text" placeholder="Nickname">
      </input>
      <input class="contactEmail" type="email" placeholder="Email Address">
      </input>
      <input class="contactPhone" type="number" placeholder="Phone">
      </input>
      <input class="submit" type="submit"></input>
    </form>
    `);

    contactForm.on('submit', function(e) {
      e.preventDefault();
      let name = contactForm.find('.name').val();
      let nickname = contactForm.find('.nickname').val();
      let email = contactForm.find('.contactEmail').val();
      let phone = contactForm.find('.contactPhone').val();
    contacts.create({name, nickname, email, phone}, {
      headers: {
        'application-id': '225A74F3-48BF-FE12-FF6A-7F83A8F8FD00',
        'secret-key': '4B61C78E-CB55-C2B6-FFCC-C9D23C29C100',
        'Content-Type':'application/json',
        'application-type': 'REST',
        'user-token': user.get('user-token')
      },

    });
    // location.hash = 'contacts';
    });
    return contactForm;
}
export default renderContactForm;
