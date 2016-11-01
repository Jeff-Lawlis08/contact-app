import $ from 'jquery';
import Backbone from 'backbone';

function renderContactForm(user) {
  const contactForm = $(`
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
      console.log('you submitted contact-form');
      let name = contactForm.find('.name').val();
      let nickname = contactForm.find('.nickname').val();
      let email = contactForm.find('.contactEmail').val();
      let phone = contactForm.find('.contactPhone').val();
    user.makeNewContact(name, nickname, email, phone);
    // location.hash = ''
    });
    return contactForm;
}
export default renderContactForm;
