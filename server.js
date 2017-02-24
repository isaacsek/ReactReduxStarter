var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var cors = require('cors');
var compiler = webpack(config);
var PORT = process.env.PORT || 8080

app.use(cors());
app.use('/static', express.static(__dirname + '/static'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/*', function(request, response) {
  response.render('index')
});

app.listen(PORT, function(err) {
  if (err) {
    return console.error(err);
  }

  console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
