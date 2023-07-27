const XLSX = require('xlsx');

export function ParseXLSX(workbook) {
    // Get the sheet names
    let sheetNames = workbook.SheetNames;

    // Create an empty object to store the parsed data
    let parsedData = {};

    // Loop over each sheet
    for(let i=0; i<sheetNames.length; i++) {
        // Get the current sheet
        let sheet = workbook.Sheets[sheetNames[i]];

        // Convert the sheet to JSON
        let sheetData = XLSX.utils.sheet_to_json(sheet);

        // Add the sheet data to the parsedData object
        parsedData[sheetNames[i]] = sheetData;
    }

    return parsedData;
}

module.exports = ParseXLSX;
