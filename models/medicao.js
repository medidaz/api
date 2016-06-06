module.exports = (sequelize, DataType) => {
    const Medicao = sequelize.define("Medicao", { 
        value: DataType.DECIMAL(10, 2)
    },{
        tableName: 'medicoes',
        classMethods:{
            associate: models => {
                Medicao.belongsTo(models.Fonte, {foreignKey: 'fonte_id'}),
                Medicao.belongsTo(models.Alimento, {foreignKey:'alimento_id'}),
                Medicao.belongsTo(models.Medida, {foreignKey:'medida_id'})
            }
        }
    });
    return Medicao;
};