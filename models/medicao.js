module.exports = (sequelize, DataType) => {
    const Medicao = sequelize.define("Medicao", { 
        valor: DataType.DECIMAL(10, 2)
    },{
        classMethods:{
            associate: models => {
                Medicao.belongsTo(models.Fonte),
                Medicao.belongsTo(models.Alimento),
                Medicao.belongsTo(models.Medida)
            }
        }
    },{ tableName: 'medicao' });
    return Medicao;
};