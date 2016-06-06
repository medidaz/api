module.exports = (sequelize, DataType) => {
    const Alimento = sequelize.define("Alimento", {
        descricao: DataType.STRING
    }, {
            tableName: 'alimentos',
            classMethods: {
                associate: models => {
                    Alimento.hasMany(models.Medicao, {foreignKey:'alimento_id'})
                }
            }
        });
    return Alimento;
};