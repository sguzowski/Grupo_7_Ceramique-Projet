module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Usuario';
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
        usuario: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        edad: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        telefono: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };
    let config = {
        tableName: "usuarios",
        timestamps: false,
    }
    const Usuario = sequelize.define(alias, cols, config);


    Usuario.associate = function (models) {
        Usuario.belongsToMany(models.Producto, { 
            as: "productos",
            through: 'usuariosproductos',
            foreignKey: 'usuarioId',
            foreignKeyConstraint: true,
            otherKey: 'productosId',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Usuario;
}