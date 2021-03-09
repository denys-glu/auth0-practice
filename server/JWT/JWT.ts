//Auth0 initialization
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

const JWT = {
    checkJwt: jwt({
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
        audience: 'TestingNodeJSAPI_REACT_SIDE',
        issuer: `http://localhost:3000/`,
        algorithms: ['RS256']
    }),
    JWTErrorHandler: function(err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send({ message: err.message });
    
            return;
        }
        next();
    }
}
export default JWT;