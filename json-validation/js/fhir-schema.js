exports.patient = {
    definitions: {
        ArrayOfString: {
            id: 'ArrayOfString',
            type: 'array',
            items: {type: 'string'}
        },
        Identifier: {
            id: 'Identifier',
            type: 'object',
            properties: {
                use: {type: 'string'},
                system: {type: 'string'},
                value: {type: 'string'}
            }
        },
        HumanName: {
            id: 'HumanName',
            type: 'object',
            properties: {
                use: {type: 'string'},
                family: {'$ref': 'ArrayOfString'},
                given: {'$ref': 'ArrayOfString'}
            }
        },
        Patient: {
            id: 'Patient',
            type: 'object',
            properties: {
                identifier: {
                    type: 'array',
                    minItems: 1,
                    items: {
                        '$ref': 'Identifier'
                    }
                },
                name: {
                    type: 'array',
                    items: {
                        '$ref': 'HumanName'
                    }
                }
            },
            required: ['identifier']
        }
    },
    '$ref': 'Patient'
};