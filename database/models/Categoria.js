const Marca = require("./Marca");

module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(100),
            
        },
    };
    let config = {
        tableName: "categorias",
        timestamps: false,
    }
    const Categoria = sequelize.define(alias, cols, config);


    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, { 
            as: "productos",
            foreignKey: 'categoriaId',
        })
    }

    return Categoria;
}