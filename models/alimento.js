module.exports = (sequelize, DataType) => {
    const Alimento = sequelize.define("Alimento", { descricao: DataType.STRING }, { tableName: 'alimentos' });
    return Alimento;
};