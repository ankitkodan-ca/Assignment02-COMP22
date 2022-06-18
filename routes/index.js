var express = require('express');
var router = express.Router();
let controlerIndex = require('../controller/index');

/* GET home page. */
router.get('/', home);

function home(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Express',
      userName: 'Ankit'
    }
  );
}


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', userName: 'Ankit' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', userName: 'Ankit' });
});

/*GET Services page. */
router.get('/services', function(req, res, next){
  res.render('services', { title: 'Services', userName: 'Ankit' });
});

/*GET Contact page. */
router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'ContactMe', userName: 'Ankit' });
});

/*GET Resume.pdf */
router.get('/', function(req, res, next){
  res.render('resume', { title: 'resume', userName: 'Ankit' });
});

router.get('/login', function(req, res, next){
  res.render('login', { title:'Login', userName: 'Ankit'});
})

module.exports = router;
