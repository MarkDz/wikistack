const { Page, User, db } = require('./models');
const express = require('express');
const morgan = require("morgan");
const layout = require('./views/layout');
const app = express();
const port = 3000;

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"));

app.get('/', async (req, res) => {
    await Page.sync();
    await User.sync();
    await db.sync({force: true});
 res.send(layout(''));
});

















app.listen(port, function(){
 console.log(`listen on port ${port}`);
});