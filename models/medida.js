module.exports = (sequelize, DataType) => {
    const Medida = sequelize.define("Medida", { descricao: DataType.STRING },{ tableName: 'medidas' });
    return Medida;
};