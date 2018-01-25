const createWord = function(req, res){
    res.render('createWord', { title: 'Express' });
}
module.exports = {
    createWord
};