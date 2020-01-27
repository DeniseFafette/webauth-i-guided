# Authentication Notes

Note: this is separate from Authorization

- save credentials for users (username + password)
- do not encrypt pws -> instead hashing with salt for passwords

Add an endpoint for a GET /api/secret that will accept a header called Authorization and returns the hash version of it's value.

Use https://www.npmjs.com/package/bcryptjs to hash the value supplied as the Authorization header.

Add the endpoint to the auth-router.js


