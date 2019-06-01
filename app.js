const app = require('./config/server.js');

const homeRoute = require('./app/routes/home.js');
homeRoute(app);

const contatoRoute = require('./app/routes/contato.js');
contatoRoute(app);

const chatRoute = require('./app/routes/chat.js');
chatRoute(app);

const notFoundRoute = require('./app/routes/404.js');
notFoundRoute(app);

app.listen(3000 || process.env.PORT, () => {
    console.log('Listening on port 3000');
});
