var fs = require('fs');

describe("FHIR JSON validator", function () {
    var validator = require(__dirname + '/../js/fhir-validator');

    describe("Patient", function () {
        it("invalidates malformed patient resource", function () {
            var errors = validator.validate({id: '12345'});
            expect(errors.length).toBeGreaterThan(0);
        });

        it("validates well-formed patient resource", function (done) {
            withValidPatient(function (patient) {
                var errors = validator.validate(patient);
                expect(errors.length).toBe(0);
                done();
            });
        });

        it("validates json string as well", function (done) {
            withValidPatient(function(patient) {
                var errors = validator.validate(JSON.stringify(patient));
                expect(errors.length).toBe(0);
                done();
            });
        });

        it("invalidates patient resource without identifier", function (done) {
            withValidPatient(function (patient) {
                patient.identifier = [];
                var errors = validator.validate(patient);
                expect(errors.length).toBeGreaterThan(0);
                done();
            });
        });
    });
});

function withValidPatient(callback) {
    fs.readFile(__dirname + '/fixture/patient-example.json', 'utf-8', function (err, data) {
        var patient = JSON.parse(data);
        callback(patient);
    });
}