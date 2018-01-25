function asd(){
    window.location.href = '/createWord'
}

const index = function(req, res){
    res.render('index', { title: 'Express' });

}

module.exports = {
    index,
    asd
};