'use strict';

var Patient = require('../models/Patient');

var patients = [
  {
    method: 'POST',
    path: '/patients',
    handler: (request, reply) => {
      Patient.create(request.payload);

      //TODO handle errors
      return reply().code(201);
    }
  },
  {
    method: 'GET',
    path: '/patients',
    handler: (request, reply) => {
      let patients = Patient.findAll().map( (v) => v);
      return reply(patients).code(200);
    }
  },
  {
    method: 'GET',
    path: '/patients/{id}',
    handler: (request, reply) => {
      let id = request.params.id;
      let patient = Patient.findById(id);
      if (!patient) {
        return reply().message("Not Found").code(404);
      }
      return reply(patient).code(200);
    }
  },
  {
    method: 'PATCH',
    path: '/patients/{id}',
    handler: (request, reply) => {
      let id = request.params.id;
      let patient = Patient.findById(id);
      if (!patient) {
        return reply().message("Not Found").code(404);
      }

      patient = request.payload;
      patient.id = id;
      Patient.update(patient);
      return reply().code(204);
    }
  },
  {
    method: 'DELETE',
    path: '/patients/{id}',
    handler: (request, reply) => {
      let id = request.params.id;
      let patient = Patient.findById(id);
      if (!patient) {
        return reply().message("Not Found").code(404);
      }
      Patient.destroy(id);
      return reply().code(204);
    }
  },
];

module.exports = patients;
