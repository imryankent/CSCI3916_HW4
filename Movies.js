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

//movie schema
var MovieSchema = new Schema({
    $jsonSchema: {
        bsonType: "object",
        required: [ "title", "year", "genre", "actors" ],
        properties: {
            title: {bsonType: String, uniqueItems: true},
            year: {bsonType: Number},
            genre: {bsonType: String, enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller', 'Western']},
            actors: {bsonType: [{actorName: String, characterName: String}], minItems: 3},
        }
    }
});

//return the model to server
module.exports = mongoose.model('Movie', MovieSchema);
