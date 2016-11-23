const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const Place = dbConnection.define('place', {
  //'place' defines how table is described in Postgres
    address: {
        type: Sequelize.STRING, //constraint that input will be under 255 characters
        allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING(2), //<- varchar: varying characters, putting a varchar of 2
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.ARRAY(Sequelize.FLOAT),
      allowNull: false
    }
});

module.exports = Place;
