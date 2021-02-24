const express=require('express')
const bodyParser=require('body-parser')
const gitHub=require('./gitHub')
const username = 'adityabisoi'
const url = `https://api.github.com/users/${username}`
const PORT = 3000
let y

const app=express()

gitHub.getProfile(url,(data)=>{
    y=data
})
console.log(y)

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

// app.listen(PORT,()=>{
//     console.log(`Server running at port ${PORT}`)
// })