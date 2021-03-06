import jwt from 'express-jwt';
import jwks from 'jwks-rsa';


export default jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: process.env.jwksUri
}),
audience: process.env.audience,
issuer: process.env.issuer,
algorithms: ['RS256']
}); 