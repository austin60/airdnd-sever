const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
require("dotenv").config();
const app=express();
const airdndUrls=require('./routes/routes');
const reservUrls=require('./routes/reservRoutes');
const signInUrls=require('./routes/signInRoutes');
const aggregateUrl=require('./routes/aggregateRoute');

//connect to db
mongoose.connect(process.env.DB_URL,console.log('Database connected'));
//app.use(express.json());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors());

//url
app.use('/airdnd',airdndUrls);
app.use('/airdnds',reservUrls);
app.use('/airdnd',signInUrls);
app.use('/airdnd',aggregateUrl);

//serving the frontend
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function(_,res){
    res.sendFile(
        path.join(_dirname,"./client/build/index.html"),
        function(err){
            res.status(500).send(err)
        }
    )
})

//listen at server
const port=process.env.PORT||5000;
app.listen(port,console.log(`serving at ${port}`))