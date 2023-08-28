'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      Curso.belongsTo(models.Pessoa, {
        tableName: 'pessoas',
        foreignKey: 'docente_id'
      });
      Curso.belongsTo(models.Categoria, {
        tableName: 'categoria',
        foreignKey: 'categoria_id'
      });
    }
  }
  Curso.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos',
  });
  return Curso;
};