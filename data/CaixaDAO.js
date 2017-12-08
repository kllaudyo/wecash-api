var CaixaDAO = function(connection){
    this._connection = connection;
};

CaixaDAO.prototype.porEmpresa = function(empresa, cb){
    this._connection.query(
        "select * from tb_caixa where id_empresa = ?",
        [empresa.id],
        cb
    );
};

module.exports = function(){return CaixaDAO};
