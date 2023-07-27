function LoadXLSX(filePath) {
    // Create a new XMLHttpRequest
    var request = new XMLHttpRequest();

    // Initialize a request
    request.open('GET', filePath, false);

    // Send the request
    request.send(null);

    // Parse the response to JSON
    var workbook = JSON.parse(request.responseText);

    return workbook;
}