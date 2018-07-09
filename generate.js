/**
 * Script to generate Coderbyte file templates
 *
 * Example: `node generate.js easy/ab_check`
 *
 * This will generate easy/ab_check.js and easy/ab_check.test.js as blank
 * templates.
 *
 * Bradley Hanson (brad@bradhanson.com)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const selfName = path.basename(process.argv[1]); // e.g., generate.js

// Enforce proper command line usage with exactly 1 parameter
if (process.argv.length !== 3) {
    console.error('Usage: node %s <file_name>', selfName);
    // https://nodejs.org/api/process.html#process_process_exit_code
    // https://nodejs.org/api/process.html#process_exit_codes
    // A bit better to set exit code and let program exit naturally
    process.exit(9);
}

const fileName = path.basename(process.argv[2]); // e.g., ab_check
const filePath = path.dirname(process.argv[2]);

// Enforce snake_case
let snakeCaseRegEx = /^[a-z]+[_a-z0-9]*[a-z0-9]+$/;
if (!snakeCaseRegEx.test(fileName)) {
    console.error(
        'Usage: node %s <file_name>\n  <file_name>: must be in snake_case',
        selfName
    );
    process.exit(9);
}

let fileNameCamelCase = fileName.replace(/[_]([a-z])/g, (_, letter) =>
    letter.toUpperCase()
);

// File templates
let codeFileContent = `/**
 *
 * @param  {type} param
 * @return {type}
 */
function ${fileNameCamelCase}(param) {

}

module.exports = ${fileNameCamelCase};`;

let testFileContent = `const ${fileNameCamelCase} = require('./${fileName}');

describe('${fileNameCamelCase}()', () => {
    test('', () => {
        expect(${fileNameCamelCase}()).toBe();
    });
});`;

// File write logic
let codeFileName = path.join(filePath, fileName) + '.js';
let testFileName = path.join(filePath, fileName) + '.test.js';

fs.writeFile(codeFileName, codeFileContent, error => {
    if (error) {
        throw error;
    }
    console.log('Generated %s', codeFileName);
});

fs.writeFile(testFileName, testFileContent, error => {
    if (error) {
        throw error;
    }
    console.log('Generated %s', testFileName);
});
