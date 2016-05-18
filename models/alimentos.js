module.exports = (sequelize, DataType) => {
  
  const Alimentos  = sequelize.define("Alimentos", {
      id: {
          type: DataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      descricao: {
          type: DataType.STRING,
          allowNull: false,
          validate:{
              notEmpty: true
          }
      }
  });
  return Alimentos;
};