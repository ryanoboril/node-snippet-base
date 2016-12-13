const PatientSchema = {
  name: 'Patient',
  primaryKey: 'id',
  properties: {
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    gender: 'string',
    alopeciaType: 'string',
    birthDate: 'string',
  }
};

module.exports = PatientSchema;
