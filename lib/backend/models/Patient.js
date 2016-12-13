const realm = require('./');

const Patient = (() => {
  return {
    create: (patient) => {
      realm.write(() => {
        realm.create('Patient', patient);
      });
    },
    update: (patient) => {
      realm.write(() => {
        realm.create('Patient', patient, true);
      });
    },
    findAll: () => {
      return realm.objects('Patient');
    },
    findById: (id) => {
      return realm.objectForPrimaryKey('Patient', id);
    },
    destroy: (id) => {
      realm.write(() => {
        let patient = realm.objectForPrimaryKey('Patient', id);
        realm.delete(patient);
      });
    },
  };
})();

module.exports = Patient;
/*
    update: (commute, cb) => {
      AWSService.updateAlert(commute, function(resp) {
        if (resp.status == 'ok') {
          commute.days = Commute.convertDaysToObjects(commute.days);
          realm.write(() => {
            realm.create('Commute', commute, true);
            if (cb) {
              cb(resp.status);
            }
          });
        } else if (cb) {
          cb(resp.status);
        }
      });
    },

    destroy: (commute, cb) => {
      AWSService.deleteAlert(commute, function(resp) {
        if (resp.status == 'ok') {
          let id = commute.id;
          realm.write(() => {
            let com = realm.objects('Commute').filtered('id = "' + id + '"');
            realm.delete(com);
            if (cb) {
              cb(resp.status);
            }
          });
        } else if (cb) {
          cb(resp.status);
        }
      });
    },

    save: (commute, cb) => {
      if (commute.update) {
        Commute.update(commute, cb);
      } else {
        Commute.create(commute, cb);
      }
    },

    convertDaysToObjects: (days) => {
      return days ? days.map( (day) => {
        return { value: day };
      }) : [];
    },

    getDaysFor: (commute) => {
      return commute && commute.days ? commute.days.map( (dayObject) => {
        return dayObject.value;
      }) : [];
    },

    getAll: () => {
      return realm.objects('Commute').map( (commute) => {
        let newCommute = Object.assign({}, commute);
        newCommute.days = Commute.getDaysFor(commute);
        return newCommute;
      });
    },

    findById: (id) => {
      let commute = realm.objectForPrimaryKey('Commute', id);
      let newCommute = Object.assign({}, commute);
      newCommute.days = Commute.getDaysFor(commute);
      return newCommute;
    },

    findByTrip: (originStation, destinationStation, scheduleType) => {
      return realm.objects('Commute').map( (commute) => {
        return (originStation.stop_name == commute.boardStation) && 
               (destinationStation.stop_name == commute.arriveStation) && 
               (scheduleType.id == commute.scheduleTypeId) ? commute : null;
      }).filter((commute) => { return (commute != null); });
    }
  };
})(); */
