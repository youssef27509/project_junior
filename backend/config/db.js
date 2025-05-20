const {Sequelize, DataTypes} =require("sequelize")
const sequelize = new Sequelize("plants","root","root",{
host:"localhost",
dialect:"mysql"

})

const db={}

db.sequelize=sequelize
db.Sequelize=Sequelize

db.plants =require("../models/Plants")(sequelize,DataTypes)


console.log("db connect");


//  sequelize.sync({alter:true})
//  .then(()=>{console.log("database is synced")})
//  .catch((err)=>{console.log(err)})

module.exports = db;