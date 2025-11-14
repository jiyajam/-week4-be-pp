// middleware/auth.js
module.exports = (req, res, next) => {
  // Allow all GET requests without auth
  if (req.method === 'GET') return next()

  // If `?admin=true` , allow the user
  if (req.query.admin === 'true') {
    req.isAdmin = true
    next()
  } else {
    res.status(403).json({ message: 'Access denied: Admins only' })
  }
}
