function goToCreateWordPage(){
    window.location.href = '/createWord';
}

function goToMainPage(){
    window.location.href = '/';
}

let searchValue = "asd";
function search(){
    let searchValue = document.getElementById("searchInput").value;
    window.location.href = '/search';
}