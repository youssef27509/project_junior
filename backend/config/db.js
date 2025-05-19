const {Sequelize, DataTypes} =require("sequelize")
const sequelize = new Sequelize("plants","root","root",{
host:"localhost",
dialect:"mysql"

})

const db={}

db.Sequelize=sequelize
db.Sequelize=Sequelize

db.name =require("../models/name")(sequelize,DataTypes)
db.price=require("../models/price")(sequelize,DataTypes)
db.types=require("../models/types")(sequelize,DataTypes)


console.log("db connect");


 sequelize.sync({alter:true})
 .then(()=>{console.log("database is synced")})
 .catch((err)=>{console.log(err)})

module.exports = db;