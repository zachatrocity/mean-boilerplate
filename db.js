var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/testapp', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
