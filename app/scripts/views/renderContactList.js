import $ from 'jquery';
import Backbone from 'backbone';
import renderListItem from './renderListItem';

function renderContactList(contacts) {

  let list = $(`
    <ul class="contact-list">
    </ul>
    `);
    console.log(contacts);
    contacts.forEach((contact, i, arr) => {
      list.append(renderListItem(contact));
    });
    contacts.on('update', () => {
      list.empty();
    contacts.forEach((contact, i, arr) => {
      list.append(renderListItem(contact));
    });
    });
    return list;
}


export default renderContactList;
