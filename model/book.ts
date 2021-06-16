import { Sequelize, DataTypes } from 'sequelize';
export var book_model = (sequelize: Sequelize) => {
    var book_model = sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        isbn: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'books'
    })
    return book_model;
}