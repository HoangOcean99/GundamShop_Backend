const admin = require("firebase-admin");

if (!process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON is missing in .env");
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert({
            ...serviceAccount,
            private_key: serviceAccount.private_key.replace(/\\n/g, "\n"),
        }),
    });
}

module.exports = admin;