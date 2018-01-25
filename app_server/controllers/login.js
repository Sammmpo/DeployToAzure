const login = function(req, res){
    res.render('login', { title: 'Express' });
}
module.exports = {
    login
};