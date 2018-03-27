const search = function(req, res){
    res.render('search', { title: 'Express' });
}

// fetch('https://kares-sampsa.azurewebsites.net/api/word')
// .then(function(response) {
//     return response.json();
// })
// .then(function(word) {
//     console.log(word);
//     console.log(word[0].word);

// })

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myObj = JSON.parse(this.responseText);
//         document.getElementById("demo").innerHTML = myObj.name;
//     }
// };
// xmlhttp.open("GET", "https://kares-sampsa.azurewebsites.net/api/word", true);
// xmlhttp.send();

module.exports = {
    search
};