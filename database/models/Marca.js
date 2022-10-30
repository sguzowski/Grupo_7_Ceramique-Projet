module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Marca';
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
        tableName: "marcas",
        timestamps: false,
    }
    const Marca = sequelize.define(alias, cols, config);


    Marca.associate = function (models) {
        Marca.hasMany(models.Producto, { 
            as: "productos",
            foreignKey: 'marcaId',
        })
    }

    return Marca;
}