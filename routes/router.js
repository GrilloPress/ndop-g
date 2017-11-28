var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' );
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render( 'index' );
});

// GET v1 index page.
router.get('/G', function(req, res, next) {
  res.render( 'G/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/G/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'G/' + theView );
});

router.get('/G/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'G/' + theDir + '/' + theView );
});

router.get('/G/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'G/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/v2', function(req, res, next) {
  res.render( 'v2/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/v2/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'v2/' + theView );
});

router.get('/v2/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'v2/' + theDir + '/' + theView );
});

router.get('/v2/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'v2/' + theDir + '/' + theDir2 + '/' + theView );
});
// // // // // // //

// GET v1 index page.
router.get('/v3', function(req, res, next) {
  res.render( 'v3/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/v3/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'v3/' + theView );
});

router.get('/v3/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'v3/' + theDir + '/' + theView );
});

router.get('/v3/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'v3/' + theDir + '/' + theDir2 + '/' + theView );
});

// // // // // // //

module.exports = router;
