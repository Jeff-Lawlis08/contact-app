import $ from 'jquery';
import Backbone from 'backbone';

function renderListItem (contact) {
  console.log(contact);
let li = $(`
  <li>
    <a href="#contact/${contact.get('objectId')}">${contact.get('name')}</a>
  </li>`
);
return li;
}

export default renderListItem;
