const admin = require('../firebaseAdmin');

async function verifyFirebaseToken(req, res, next) {
  const authorization = req.headers.authorization || '';
  const match = authorization.match(/^Bearer\s+(.+)$/i);

  if (!match) {
    return res.status(401).json({ message: 'Missing or invalid Authorization header. Expected: Bearer <token>' });
  }

  const idToken = match[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    return next();
  } catch (error) {
    console.error('Firebase token verification failed:', error);
    return res.status(401).json({ message: 'Unauthorized - invalid or expired token' });
  }
}

module.exports = {
  verifyFirebaseToken,
};
