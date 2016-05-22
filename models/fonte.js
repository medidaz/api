module.exports = (sequelize, DataType) => {
    const Fonte = sequelize.define("Fonte", { 
        descricao: DataType.STRING,
        texto_exibicao: DataType.STRING,
        metodologia: DataType.STRING
    },{ tableName: 'fontes' });
    return Fonte;
};