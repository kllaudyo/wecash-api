var app = require('./config/wecash-express')();

app.listen(3000, function(){
    console.log('Servidor esta no ar na porta 3000');
});