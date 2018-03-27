const apiURL = {
    //server : 'http://localhost:27017'
    server : 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiURL.server = 'https://kares-sampsa.azurewebsites.net/';
}

module.exports = apiURL;