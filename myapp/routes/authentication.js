var express = require('express');
var router = express.Router();
module.exports = function(passport){
//sends successful login state back to view(angular)
    router.get('/success',function(req,res){
           res.send({state: 'success', user: req.user ? req.user: null});    
    });
//send failure login state back to view(angular)
    router.get('/failure',function(req,res){
res.send({state: 'failure',user:null,message:"Invalid username or password"});
    });
    //login requeset
router.post('/login',passport.authenticate('login',{
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));
//signup request, sign-up is connected to the login page.
    router.post('login/sign-up', passport.authenticate('login/sign-up', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));
//logout request
    router.get('login/sign-out', function(req, res) {
        req.session.user = null;
        req.logout();
        res.redirect('/');
    });
return router;
}