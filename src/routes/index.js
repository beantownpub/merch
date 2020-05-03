var express = require('express');
var router = express.Router();

var jalVersion = (process.env.JAL_VERSION) ? process.env.JAL_VERSION : 'unset'
var config = require('./config.json')
var sections = config.sections

router.use(function (req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path)
  next()
})

router.get('/', function(req, res, next) {
  const home = sections.home
  res.set('x-jalv', jalVersion)
  res.render(home.template, home.metadata);
});

router.get('/notes', function(req, res, next) {
    const notes = sections['notes']
    res.set('x-jalv', jalVersion)
    res.render(notes.template, notes.metadata);
});

router.get('/note-view', function(req, res, next) {
  console.log(req.route)
  const metadata = {
                      title: 'Demo',
                      description: 'Jonny Graves web presence',
                      keywords: 'technology, blog, developer'
                    }
  res.render('noteView', metadata);
});

router.get('/sports', function(req, res, next) {
  const sports = sections.sports
  res.set('x-jalv', jalVersion)
  res.render(sports.template, sports.metadata);
});

router.get('/nfl-games', function(req, res, next) {
  console.log(req.route)
  const nflGames = sections['nfl-games']
  res.set('x-jalv', jalVersion)
  res.render(nflGames.template, nflGames.metadata);
});

router.get('/nfl-team-stats', function(req, res, next) {
  console.log(req.route)
  const nflTeamStats = sections['nfl-team-stats']
  res.set('x-jalv', jalVersion)
  res.render(nflTeamStats.template, nflTeamStats.metadata);
});

router.get('/nfl-standings', function(req, res, next) {
  const nflStandings = sections['nfl-standings']
  res.set('x-jalv', jalVersion)
  res.render(nflStandings.template, nflStandings.metadata);
});

router.get('/nhl-team-stats', function(req, res, next) {
  const nhlTeamStats = sections['nhl-team-stats']
  res.set('x-jalv', jalVersion)
  res.render(nhlTeamStats.template, nhlTeamStats.metadata);
});

router.get('/nhl-games', function(req, res, next) {
  const nhlGames = sections['nhl-games']
  res.set('x-jalv', jalVersion)
  res.render(nhlGames.template, nhlGames.metadata);
});

router.get('/nhl-standings', function(req, res, next) {
  const nhlStandings = sections['nhl-standings']
  res.set('x-jalv', jalVersion)
  res.render(nhlStandings.template, nhlStandings.metadata);
});

router.get('/about', function (req, res, next) {
  res.render('index', {
    title: 'About JAL'
  });
});

module.exports = router;
