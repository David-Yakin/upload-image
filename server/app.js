const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const image = require('./routes/imageRouter');

mongoose.connect('mongodb://localhost/my_rest_api',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("connected to mongo!"))
.catch((err)=>console.error("could not connect to mongo",
 err));

app.use(cors());// להוריד כשמעלים לשרת אמיתי!!!
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./public'));

app.use('/api/images', image);

const PORT = 8181;
app.listen(PORT, ()=> {
console.log(`server run on: http://localhost:${PORT}`)
});
