module.exports = function (app) {
    app.get('/api/caixas', function (request, response) {
        var connection = app.data.connectionFactory();
        var dao = new app.data.CaixaDAO(connection);
        dao.porEmpresa({id:1},function(err, resultSet){
            if(err){
                response.status(400).json({err:err});
                return;
            }
            response.status(200).json(resultSet);
        });
    });
};