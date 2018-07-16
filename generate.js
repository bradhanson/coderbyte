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

// Usage: node generate.js <file_name>
enforceCommandLineUsage(); // or exit

const fileName = path.basename(process.argv[2]); // e.g., ab_check
const filePath = path.dirname(process.argv[2]);

enforceSnakeCase(); // or exit

let fileNameCamelCase = snakeToCamelCase(fileName);

let codeFileContent = getCodeFileContent();
let testFileContent = getTestFileContent();

let codeFileName = path.join(filePath, fileName) + '.js';
let testFileName = path.join(filePath, fileName) + '.test.js';

checkForExistingFiles(codeFileName, testFileName); // or exit

writeFile(codeFileName, codeFileContent);
writeFile(testFileName, testFileContent);

/**
 * Functions below
 */

// Enforce proper command line usage with exactly 1 parameter
function enforceCommandLineUsage() {
    if (process.argv.length !== 3) {
        console.error('Usage: node %s <file_name>', selfName);
        // https://nodejs.org/api/process.html#process_process_exit_code
        // https://nodejs.org/api/process.html#process_exit_codes
        // A bit better to set exit code and let program exit naturally
        process.exit(9);
    }
}

// Enforce snake_case
function enforceSnakeCase() {
    let snakeCaseRegEx = /^[a-z]+[_a-z0-9]*[a-z0-9]+$/;
    if (!snakeCaseRegEx.test(fileName)) {
        console.error(
            'Usage: node %s <file_name>\n  <file_name>: must be in snake_case',
            selfName
        );
        process.exit(9);
    }
}

function snakeToCamelCase(str) {
    str = String(str);
    let camelCase = str.replace(/[_]([a-z])/g, (_, letter) =>
        letter.toUpperCase()
    );
    return camelCase;
}

function getCodeFileContent() {
    let content = `/**
 *
 * @param  {type} param
 * @return {type}
 */
function ${fileNameCamelCase}(param) {

}

module.exports = ${fileNameCamelCase};`;

    return content;
}

function getTestFileContent() {
    let content = `const ${fileNameCamelCase} = require('./${fileName}');

describe('${fileNameCamelCase}()', () => {
    test('', () => {
        expect(${fileNameCamelCase}()).toBe();
    });
});`;

    return content;
}

function checkForExistingFiles(...files) {
    const existingFiles = files.filter(file => fs.existsSync(file));

    if (existingFiles.length > 0) {
        const fileString = existingFiles.map(str => '  ' + str).join('\n');
        console.error(
            'Files already exist:\n%s\n\nAborting... nothing modified.',
            fileString
        );
        process.exit(9);
    }
}

function writeFile(fileName, fileContent) {
    fs.writeFile(fileName, fileContent, error => {
        if (error) {
            throw error;
        }
        console.log('Generated %s', fileName);
    });
}
