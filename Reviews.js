var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

//mongoose.connect(process.env.DB, { useNewUrlParser: true });
try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
mongoose.set('useCreateIndex', true);

//review schema
var ReviewSchema = new Schema({
    name: {type: String, required: true},
    quote: {type: String},
    stars: {type: Number, min: 1, max: 5},
    title: {type: String, required: true},
});


//return the model to server
module.exports = mongoose.model('Review', ReviewSchema);
