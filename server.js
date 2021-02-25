const gitHub=require('./gitHub')
const username = 'adityabisoi'
const url = `https://api.github.com/users/${username}`
var fs = require('fs');
var writeStream = fs.createWriteStream("github.xlsx");

gitHub.getProfile(url,(data)=>{
    writeData(data)
})

function writeData(data) {
    var header = "Username" + "\t" + "URL" + "\t" + "Name" + "\t" + "Company" + "\t" + "Blog" + "\t" + "Location" + "\t" + "Repositories" + "\t" + "Followers" + "\t" + "Following" + "\n"
    var row1 = data.login + "\t" + data.url + "\t" + data.name + "\t"+ data.company + "\t" + data.blog + "\t" + data.location + "\t" + data.public_repos + "\t" + data.followers + "\t" + data.following+ "\n";

    writeStream.write(header);
    writeStream.write(row1);

    writeStream.close();
}
