import Backbone from 'backbone';
import Contact from '../models/contact';
import $ from 'jquery';

export default Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-za-server.herokuapp.com/collections/jeffscontactsusers'
});
