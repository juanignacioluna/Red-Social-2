var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var registroRouter = require('./routes/registro');
var otroRouter = require('./routes/otro');
var getMgRouter = require('./routes/getMg');
var getMg2Router = require('./routes/getMg2');
var loginRouter = require('./routes/login');
var getPosteoRouter = require('./routes/getPosteo');
var usersRouter = require('./routes/users');
var buscarLoSigoRouter = require('./routes/buscarLoSigo');
var buscarSeguirRouter = require('./routes/buscarSeguir');
var otroLoSigoRouter = require('./routes/otroLoSigo');
var seguirRouter = require('./routes/seguir');
var testAPIRouter = require("./routes/testAPI");
var getTuitsRouter = require("./routes/getTuits");
var jugarRouter = require('./routes/jugar');
var rtRouter = require('./routes/rt');
var mgRouter = require('./routes/mg');
var getNotisRouter = require('./routes/getNotis');
var getNotiTuitRouter = require('./routes/getNotiTuit');
var getNotiRTRouter = require('./routes/getNotiRT');
var getTuitsTimelineRouter = require('./routes/getTuitsTimeline');
var getTuitsTimeline2Router = require('./routes/getTuitsTimeline2');
var buscarRouter = require('./routes/buscar');
var getBuscarRouter = require('./routes/getBuscar');
var postearRouter = require('./routes/postear');
var sessRouter = require('./routes/sess');
var perfilPersonalRouter = require('./routes/perfilPersonal');
var otroPersonalRouter = require('./routes/otroPersonal');
var otroGetTuitsRouter = require('./routes/otroGetTuits');
var randomstring = require("randomstring");
var cookieSession = require('cookie-session');
var mongoose = require("mongoose");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors());
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'Sup3R$ecR3t',
  saveUninitialized: false,
  cookie: {
    expiress: new Date(Date.now() + 60000),
    httpOnly: true
  }
}));


app.post('/login', function (req, res) {

    (async () => {



      try{

          var schema = new mongoose.Schema({

              nombreReal: String,
              arroba: String,
              password: String


          }, {collection: 'users'});



          var random = Math.random();


          var User = mongoose.model(''+random+'', schema);

          
          
          await mongoose.connect("mongodb://localhost:27017", {
              dbName: 'socialnet02',
              useNewUrlParser: true
          });


          const ahBo = await User.findOne({arroba: req.body.arroba, password: req.body.password });  //SELECT


          if(ahBo){

              session.arroba = req.body.arroba;
              
              console.log("LOGUEAR A " + req.session.arroba);

              res.send("1");


          }else{

              console.log("No existe");

              res.send("0");

          }




      } catch(error){
          console.error(error);
      }



  })();

});

app.get('/sess', function (req, res) {
  if (req.session.arroba) {
    res.send(req.session.arroba);
    console.log('req.session.arroba');
  } else {
    res.send(session.arroba); 
    console.log("NAATI");
    console.log(session.arroba);
    console.log(session);
}

});

app.post('/cerrar', function (req, res) {
  


    session.arroba = "";

    res.send("Listo");


});

app.use('/', indexRouter);
app.use('/registro', registroRouter);
app.use('/seguir', seguirRouter);
// app.use('/login', loginRouter);
app.use('/jugar', jugarRouter);
app.use('/otro', otroRouter);
// app.use('/cerrar', cerrarRouter);
app.use('/perfilPersonal', perfilPersonalRouter);
app.use('/getNotis', getNotisRouter);
app.use('/otroPersonal', otroPersonalRouter);
app.use('/buscarSeguir', buscarSeguirRouter);
app.use('/buscarLoSigo', buscarLoSigoRouter);
app.use('/otroGetTuits', otroGetTuitsRouter);
app.use('/rt', rtRouter);
// app.use('/sess', sessRouter);
app.use('/getTuitsTimeline', getTuitsTimelineRouter);
app.use('/getTuitsTimeline2', getTuitsTimeline2Router);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/otroLoSigo", otroLoSigoRouter);
app.use("/getMg", getMgRouter);
app.use("/getMg2", getMg2Router);
app.use("/mg", mgRouter);
app.use("/getTuits", getTuitsRouter);
app.use("/getPosteo", getPosteoRouter);
app.use("/getBuscar", getBuscarRouter);
app.use("/getNotiTuit", getNotiTuitRouter);
app.use("/getNotiRT", getNotiRTRouter);
app.use("/buscar", buscarRouter);
app.use("/postear", postearRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
