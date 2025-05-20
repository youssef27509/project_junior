module.exports = (sequelize, DataTypes) => {
    const plants = sequelize.define("plants", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true, 
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
    })

    return plants;
  };
