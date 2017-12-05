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

// GET v1 index page.
router.get('/v1', function(req, res, next) {
  res.render( 'v1/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/v1/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'v1/' + theView );
});

router.get('/v1/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'v1/' + theDir + '/' + theView );
});

router.get('/v1/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'v1/' + theDir + '/' + theDir2 + '/' + theView );
});

// // // // // // //

// GET v1 index page.
router.get('/v0', function(req, res, next) {
  res.render( 'v0/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/v0/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'v0/' + theView );
});

router.get('/v0/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'v0/' + theDir + '/' + theView );
});

router.get('/v0/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'v0/' + theDir + '/' + theDir2 + '/' + theView );
});

// // // // // // //


// GET v1 index page.
router.get('/v4', function(req, res, next) {
  res.render( 'v4/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/v4/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'v4/' + theView );
});

router.get('/v4/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'v4/' + theDir + '/' + theView );
});

router.get('/v4/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'v4/' + theDir + '/' + theDir2 + '/' + theView );
});

// // // // // // //

// GET v1 index page.
router.get('/vX', function(req, res, next) {
  res.render( 'vX/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/vX/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'vX/' + theView );
});

router.get('/vX/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'vX/' + theDir + '/' + theView );
});

router.get('/vX/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'vX/' + theDir + '/' + theDir2 + '/' + theView );
});

// // // // // // //

module.exports = router;
