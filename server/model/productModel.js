const Sequelize=require('sequelize');

const sequelize=require('../utilities/database');

const Product=sequelize.define('products',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    quantity:{
        type:Sequelize.DOUBLE,
        allowNull:false
    }
    
})

module.exports=Product;