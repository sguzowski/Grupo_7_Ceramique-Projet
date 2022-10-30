module.exports = (sequelize, dataTypes) => {

    let alias = 'Producto';
    let cols = {

        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        precio:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        descuento:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        categoriaId:{
            type: dataTypes.INTEGER,
        },
        descripcion: {
            type: dataTypes.STRING(100),
            
        },
        imagen: {
            type: dataTypes.STRING(100),
            
        },
        stock:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        marcaId:{
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        tableName: "productos",
        timestamps: false,
    }
    const Producto = sequelize.define(alias, cols, config);


    Producto.associate = function (models) {
        Producto.belongsTo(models.Marca, { 
            as: "marcas",
            foreignKey: "marcaId"
        })

        Producto.belongsTo(models.Categoria, { 
            as: "categorias",
            foreignKey: "categoriaId"
        })

        Producto.belongsToMany(models.Usuario, { 
            as: "usuarios",
            through: 'usuariosproductos',
            foreignKey: 'productosId',
            foreignKeyConstraint: true,
            otherKey: 'usuariosId',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Producto;

}