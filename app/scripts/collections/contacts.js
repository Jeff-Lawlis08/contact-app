import Backbone from 'backbone';
import Contact from '../models/contact';
import $ from 'jquery';

export default Backbone.Collection.extend({
  model: Contact,
  url: 'https://api.backendless.com/v1/data/contacts',
  parse(data) {
    console.log(data.data);
    return data.data;
  }
});
