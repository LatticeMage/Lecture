const XLSX = require('xlsx');

function LoadXLSX(filePath) {
    // Load the XLSX file
    let workbook = XLSX.readFile(filePath);

    return workbook;
}

module.exports = LoadXLSX;