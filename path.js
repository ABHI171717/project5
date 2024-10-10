const express = require('express');
const path = require('path');
const { title } = require('process');
const port = 8001;

const app = express();
//const fs = require('fs')
/*function requstest(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('./index.html',function(err, data){
        if(err){
            console.log('error',err);
            return res.end('<h1>error</h1>');
        }
        return res.end(data);
    })

}
const server=http.createServer(requstest);*/

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views') );
app.use(express.urlencoded);
var contactList =[
    {
        name:"abhi",
        number:"1234567890"
    },
    {
        name: "Reddy",
        number:"0987654321"
    }
]

app.get('/', function(req,res){
    
    res.render('home', {
        contact_List: contact_List
     });
})
app.get('/practice',function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    })

})
app.post('/create-contact',function(req,res){
    contactList.push({
        name: req.body.name,
        number: req.body.number
    });
  return res.redirect('/prac');
})

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is running up of the port',port);

})