const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ratingSchema = new Schema({
    user: { type: String },
    rating: { type: Number },
    movie: { type: String },

});

const Rating = mongoose.model('rating', ratingSchema);

module.exports = Rating;