const express = require('express');
const path =require('path');
const port = 8000;

const app =express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

// //   middlewarel
// app.use(function(req, res, next){
//   req.myName="Arti";
//     // console.log('middleware 1 called');
//     next();
// });
// // middleware2
// app.use(function(req, res, next){
//   console.log('My Name from M2',req.myName);
//     // console.log('middleware 2 called');
//     next();
// });

 var contactList = [ 
    {
        name: "Arti Sharma",
        phone:"1234567890"
    },
    {
        name:"tony Stark",
        phone:"1112223331"
    },
    {
        name:"Coding Ninjas",
        phone:"987654321"
        
    }, 
 ]



app.get('/',function(req,res){
    console.log('from the get route controller', req.myName);
    // console.log(__dirname);
    // res.send('<h1>Cool, it is running! or is it?</h1>');
     return res.render('home', { 
        title: "Contacts List",
        contact_list: contactList

    });
});

app.get('/Practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});

 app.post('/create-contact', function(req, res){
    //   contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone,
    //   })
    contactList.push(req.body);
      return res.redirect('back');

    //  console.log(req.body);
    //  console.log(req.body.name);
    //  console.log(req.body.phone);
    // return res.redirect('/practice');
 });
//  for deleting a contact
 app.get('/delete-contact', function(req,res){
     // get the query from the url 
    let phone =req.query.phone;

    let contactIndex= contactList.findIndex(contact => contact.phone == phone);
      if (contactIndex != -1){
        contactList.splice(contactIndex, 1);
      }

      return res.redirect('back');

 });

app.listen(port, function(err){
    if (err) { console.log('Error in running the server',err);}

    console.log('Yup!My Express Server is running on port:',port);
});

