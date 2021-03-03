require('dotenv').config({ path: __dirname + '/.env' })
const express = require("express");
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const app = express();
const cors = require('cors');
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(
    jwt({
        // Dynamically provide a signing key
        // based on the kid in the header and 
        // the signing keys provided by the JWKS endpoint.
        secret: jwksRsa.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `http://localhost:3000/.well-known/jwks.json`
        }),

        // Validate the audience and the issuer.
        audience: 'TestingNodeJSAPI',
        issuer: `http://localhost:3000/`,
        algorithms: ['RS256']
    }).unless({ path: ['/api/tickets/new'] }),
    express.json(),
    cors(),
    express.urlencoded({ extended: true }));

app.use(function(err, req, res, next) {
    console.log('err', err)
    if (err.name === 'UnauthorizedError') {
        res.status(err.status).send({ message: err.message });

        return;
    }
    next();
});
// This is where we import the users routes function from our user.routes.js file
require("./routes/myKanban.routes")(app);

const server = app.listen(port, () => console.log(`The server is all fired up on port ${port}`));