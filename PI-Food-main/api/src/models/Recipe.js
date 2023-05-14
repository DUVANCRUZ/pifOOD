const { DataTypes } = require('sequelize'); // Importar la librería Sequelize

module.exports = (sequelize) => {
  // Exportar una función que define el modelo de "recipe" en Sequelize y le inyecta la conexión

  sequelize.define('recipe', {
    // Definir las columnas de la tabla "recipe"

    id: {
      // Definir la columna "id"
      type: DataTypes.UUID, // Tipo de dato de la columna: UUID (identificador único universal)
      defaultValue: DataTypes.UUIDV4, // Establecer un valor por defecto generado automáticamente usando la versión 4 de UUID
      allowNull: false, // No permitir valores nulos
      primaryKey: true, // Establecer como clave primaria de la tabla
    },

    title: {
      // Definir la columna "tittle"
      type: DataTypes.STRING, // Tipo de dato de la columna: cadena de caracteres
      allowNull: false // No permitir valores nulos
    },

    image: {
      // Definir la columna "imagen"
      type: DataTypes.STRING, // Tipo de dato de la columna: cadena de caracteres
      allowNull: false // No permitir valores nulos
    },

    summary: {
      // Definir la columna "summary"
      type: DataTypes.TEXT, // Tipo de dato de la columna: texto
      allowNull: false // No permitir valores nulos
    },

    healthScore: {
      // Definir la columna "healthScore"
      type: DataTypes.INTEGER, // Tipo de dato de la columna: entero
      allowNull: false // No permitir valores nulos
    },

    steps: {
      // Definir la columna "steps"
      type: DataTypes.ARRAY(DataTypes.STRING), // Tipo de dato de la columna: array de cadenas de caracteres
      allowNull: false // No permitir valores nulos
    },
    createdByUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    // Configuración adicional del modelo
    timestamps: false // Evitar que Sequelize agregue automáticamente las columnas de "created_at" y "updated_at"
  });
};