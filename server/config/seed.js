/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    title : 'Wild Wednesdays at Jacks',
    date : '05/06/2015',
    category: 'Nightlife',
    location: 'London, ON',
    img: 'event1.png',
    body: 'Come in and join us for some good drinks and music',
    promos: '$1.50 beers all night'
  }, {
   title : 'Kevin Hart at Bud Gardens',
    date : '05/06/2015',
    category: 'Entertainment',
    location: 'London, ON',
    body: 'Kevin Hart is live at Bud Gardens tonight with few tickets still available',
    promos: 'First 100 people in receive free t-shirts'
  }, {
    title : 'Cheap Wings at Crabbys',
    date : '05/06/2015',
    category: 'Restaurants',
    location: 'London, ON',
    body: 'Crabby Joes has everything you need to get your wing craving satisfied',
    promos: '39 cent wings and half price apps after 9'
  },  {
    title : 'Tuesday is Family Night at Fleetway',
    date : '05/06/2015',
    category: 'Family Fun',
    location: 'London, ON',
    body: 'Bring the family out for cheap bowling, mini golf and pool!',
    promos: '$3.50 games of bowling, $4 pool and $7 mini golf'
  },  {
    title : 'Sunfest 2015',
    date : '05/06/2015',
    category: 'City Events',
    location: 'London, ON',
    body: 'London is proud to host Sunfest for another year and bring a touch of every part of the world to Victoria Park',
    promos: 'Free Parking around Victoria Park'
  },{
    title : 'Jim Bobs Summer Wednesdays',
    date : '05/06/2015',
    category: 'Nightlife',
    location: 'London, ON',
    body: 'Jim Bobs is your party headquarters to quench your mid week thirst',
    promos: '$2.50 Jagerbombs'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});