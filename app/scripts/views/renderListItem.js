import $ from 'jquery';
import Backbone from 'backbone';

function renderListItem (contact) {
  console.log(contact);
let li = $(`
  <li>
    <span>Name: ${contact.get('name')}</span>
    <span>Nickname: ${contact.get('nickname')}</span>
    <span>Email: ${contact.get('email')}</span>
    <span>Phone-Number: ${contact.get('phone')}</span>
  </li>`
);
return li;
}

export default renderListItem;
