const axios = require('axios')


const getProfile = async (url, callback) => {
    await axios.get(url).then(res => {
        callback(res.data)
    })
}

const api={
    getProfile
}

module.exports =  api