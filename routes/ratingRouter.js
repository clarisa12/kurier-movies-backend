const router = require('express').Router();
let Rating = require('../models/RatingModel');

router.route('/').get(async (req, res) => {
    try {
        const rating = await Rating.find();
        res.json(rating);
    } catch (err) {
        res.json('Error:' + err);
    }
})



router.route('/post').post(async (req, res) => {


    const user = req.body.user;
    const rating = Number(req.body.rating);
    const movie = req.body.movie;



    const newRatings = new Rating({
        user,
        rating,
        movie
    });



    try {
        const savedRating = await newRatings.save();

        res.json(savedRating);
    } catch (err) {
        res.json('Error: ' + err);
    }
})


router.route('/averageRating/:movie_id').get(async (req, res) => {
    const movieId = req.params.movie_id
    console.log(movieId)


    try {
        await Rating.aggregate([
            { $match: { movie: movieId } },
            { $group: { _id: "$movie", average: { $avg: "$rating" } } }
        ], function (err, result) { res.send(result[0]) });


    } catch (err) {
        console.log(err)
    }



})

module.exports = router;