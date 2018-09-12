const express = require('express'),
      Twig = require('twig'),
      bodyParser = require('body-parser'),
      app = express();

const routerPosts = require('./api/routes/posts');

app.set("twig options", {
    allow_async: true,
    strict_variables: false
});

// app.get('/', ( req, res ) => {
//     res.render('pages/index.twig', {
//         message: "Hello World"
//     });
// });

app.use( express.static( __dirname + '/public'));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }));

app.use('/', routerPosts );

app.listen('3000', () => {
    console.log('Server started on port 3000');
});