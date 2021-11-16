const express = require('express');
const sequelize  = require('./config/connection');
const db = require('./models');
const hbs =  require('express-handlebars');
const PORT = process.env.PORT || 3001;

const app = express();

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
});
