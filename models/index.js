// Export all models as well as db connection itself
const theDbConnection = require('./_db');
const HotelModel = require('./hotel');
const PlaceModel = require('./place');
const ActivityModel = require('./activity');
const RestaurantModel = require('./restaurant');

HotelModel.belongsTo(PlaceModel);
RestaurantModel.belongsTo(PlaceModel);
ActivityModel.belongsTo(PlaceModel);

module.exports = {
    db: theDbConnection,
    Hotel: HotelModel,
    Activity: ActivityModel,
    Place: PlaceModel,
    Restaurant: RestaurantModel
};
