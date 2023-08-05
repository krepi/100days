const resData = require("../util/resturant-data");
const uuid = require("uuid");

const express = require('express');
const router = express.Router();

router.get('/confirm', function (req, res) {
    res.render('confirm');
});

router.get('/recommend', function (req, res) {
    res.render('recommend');
});

router.get('/restaurants', function (req, res) {
    let order = req.query.order;
    let nextOrder = 'dsc';

    if (order !== ' asc' && order !== 'dsc') {
        order = 'asc';
    }
    if(order === 'dsc'){
        nextOrder = 'asc';
    }

    const storedRestaurants = resData.getStoredRestaurants();

    storedRestaurants.sort(function (resA, resB) {
        if (order === 'asc' && resA.name > resB.name) {
            return 1;
        } else if (order === 'dsc' && resA.name < resB.name) {
            return 1;
        }
        return -1;
    });

    res.render('restaurants', {
        numberOfRestaurants: storedRestaurants.length,
        restaurants: storedRestaurants,
        nextOrder:nextOrder
    });
});

router.get('/restaurants/:rid', function (req, res) {
    const restaurantId = req.params.rid;

    const storedRestaurants = resData.getStoredRestaurants();


    for (const storedRestaurant of storedRestaurants) {
        if (storedRestaurant.rid === restaurantId) {
            return res.render('restaurant-detail', {restaurant: storedRestaurant});
        }
    }

    res.status(404).render('404');

});


router.post('/recommend', function (req, res) {
    const restaurant = req.body;
    restaurant.rid = uuid.v4();

    const storedRestaurants = resData.getStoredRestaurants();

    storedRestaurants.push(restaurant);

    resData.storeRestaurants(storedRestaurants);

    res.redirect('/confirm');

});

module.exports = router;