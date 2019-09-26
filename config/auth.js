module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if(req.isAuthenticated()){
      return next();
    }
    req.flash('error_msg', 'Please login to view this ressources');
    res.redirect('/users/login');
  }
}
