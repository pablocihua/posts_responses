const express = require('express'),
    Twig = require('twig'),
    bodyParser = require('body-parser'),
    app = express();

const routerPosts = require('./api/routes/posts'),
    routerResponse = require('./api/routes/responses');

app.set('port', process.env.PORT || 3000 );
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

// This section is optional and can be used to configure twig.
app.set('twig options', {
    allow_async: true,
    strict_variables: true
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routerResponse);
app.use('/', routerPosts);

app.listen( app.get('port'), () => {
    console.log('Server RUNING on port: ' + app.get('port'));
});