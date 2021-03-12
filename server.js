const gitHub=require('./gitHub')
const username = 'adityabisoi'
const url = `https://api.github.com/users/${username}`      // Define endpoint
var fs = require('fs');
var writeStream = fs.createWriteStream("github.xlsx");      // To write into the file

gitHub.getProfile(url,(data)=>{     // getProfile function from gitHub.js is called with two paramenters, url and callback function
    writeData(data)     // Pass the obtained endpoint data to writeData function below for writing in xlsx file
})

function writeData(data) {
    var header = "Username" + "\t" + "URL" + "\t" + "Name" + "\t" + "Company" + "\t" + "Blog" + "\t" + "Location" + "\t" + "Repositories" + "\t" + "Followers" + "\t" + "Following" + "\n"
    var row1 = data.login + "\t" + data.url + "\t" + data.name + "\t"+ data.company + "\t" + data.blog + "\t" + data.location + "\t" + data.public_repos + "\t" + data.followers + "\t" + data.following+ "\n";

    writeStream.write(header);      // Writes the headings in the xlsx file
    writeStream.write(row1);      // Writes the GitHub data in the xlsx file

    writeStream.close();      // Closes the xlsx file
}
