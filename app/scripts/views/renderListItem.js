import $ from 'jquery';
import Backbone from 'backbone';

function renderListItem (contact) {
  console.log(contact);
let li = $(`
  <li>
    <span>${contact.get('name')}</span>
    <span>${contact.get('nickname')}</span>
    <span>${contact.get('email')}</span>
    <span>${contact.get('phone')}</span>
  </li>`
);
return li;
}

export default renderListItem;
