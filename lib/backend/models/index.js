const Realm = require('realm');

//Schemas
const PatientSchema = require( './schemas/PatientSchema');
//const PhotoSchema = require( './schemas/PhotoSchema');
//const ImageSchema = require( './schemas/ImageSchema');

module.exports = new Realm({
  schema: [
    PatientSchema,
    //PhotoSchema,
    //ImageSchema,
  ]
});

//Model APIs
const Patient = require('./Patient');

//Add generic listener function to encapsulate the actual listener function.
//realm.addChangeListener = (changeHandler) => {
//  realm.addListener('change', changeHandler);
//};

//realm.removeListeners = () => {
//  // Unregister all listeners
//  realm.removeAllListeners();
//};

//Model APIs
//import Route from './Route';
//import Stop from './Stop';
//import StopTime from './StopTime';
//import ScheduleType from './ScheduleType';
//import Station from './Station';
//
////Seeds
//import routes from './seeds/routes';
//import stops from './seeds/stops';
//import stopTimes from './seeds/stop_times';
//import trips from './seeds/trips';
//import options from './seeds/options';
