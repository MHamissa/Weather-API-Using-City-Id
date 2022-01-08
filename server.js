const bodyParser=require('body-parser');
const express=require('express');
const app=express();
/*dependencies*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//cors for cross origin allowance


//making a local server

const port= 3000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});
app.use(express.static('website'));


