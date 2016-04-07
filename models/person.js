var mongoose = require('mongoose');
mongoose.connect('mongodb://Kappa:Kappa@ds015720.mlab.com:15720/myfirstmongolab');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname : String,
  lastname  : String
});
module.exports = mongoose.model('Person', personSchema);
