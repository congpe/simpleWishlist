/**
 * Created by cong on 4/12/17.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Wish',{
    text : String
});