function goToCreateWordPage(){
    window.location.href = '/createWord';
}

function goToMainPage(){
    window.location.href = '/';
}

let searchValue = "asd";
function search(){
    let searchValue = document.getElementById("searchInput").value;
    window.location.href = '/search='+searchValue+'';
}

function addWord(){
    // load('././app_server/scripts/addWord.js');
    // db.dropDatabase();

    // db.word.save(
    //     [
    //         {word:'lol', definition:'lots of laugh'}
    //     ]
    // );

    // console.log("word created");
}