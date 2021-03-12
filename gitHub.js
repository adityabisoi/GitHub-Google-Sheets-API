const axios = require('axios')


const getProfile = (url, callback) => {       // Two parameters, url from server.js and a callback which will be executed after obtaining data from endpoint
    axios.get(url).then(res => {
        callback(res.data)        // Gets URL, then sends the data to callback function which goes back to server.js
    })
}

const api={
    getProfile
}

module.exports =  api       // Function is exported to be able to be imported in server.js