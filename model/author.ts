import { Sequelize, DataTypes } from 'sequelize';
export var author_model = (sequelize: Sequelize) => {
    var author_model = sequelize.define('author', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_of_birth: {
            type: 'TIMESTAMP'
        }
    }, {
        timestamps: false,
        tableName: 'authors'
    })
    return author_model;
}