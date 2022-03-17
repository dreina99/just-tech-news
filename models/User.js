const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // TABLE COLUMN DEFINITIONS
        // id column
        id: {
            // use the special Sequelize DataTypes object 
            type: DataTypes.INTEGER,
            // equivalent to `NOT NULL` in SQL
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicates
            unique: true,
            // run through if allowNull is set to false
            validate: {
                isEmail: true
            }
        },
        // password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // pw must be 4 chars long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIG OPTIONS
        // pass in imported sequelize connection
        sequelize,
        // dont automatically create timestamp fields
        timestamps: false,
        // dont pluralize name of db table
        freezeTableName: true,
        // use underscores instead of camelCase
        underscored: true,
        // model name stays lowercase
        modelName: 'user'
    }
);

module.exports = User;