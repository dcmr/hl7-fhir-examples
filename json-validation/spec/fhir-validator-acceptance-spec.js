var fs = require('fs');

describe("FHIR JSON validator acceptance", function () {
    var validator = require(__dirname + '/../js/fhir-validator');

    describe("Patient", function () {
        it("validates all well-formed patient documents", function () {
            var patientFixtureDir = __dirname + '/fixture/patient';
            var allFixtureFileNames = fs.readdirSync(patientFixtureDir);
            allFixtureFileNames.forEach(function (fixtureFilename) {
                var patientAsJson = fs.readFileSync(patientFixtureDir + '/' + fixtureFilename);
                var errors = validator.validate(JSON.parse(patientAsJson));
                if (errors.length > 0) {
                    console.error(errors);
                    throw "Failed to validate file " + fixtureFilename;
                } else {
                    console.log("Validated file " + fixtureFilename);
                }
            });
        });
    });
});