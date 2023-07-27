// ParseForm.js

function ParseForm(fileInputId, callback) {
    const fileInput = document.getElementById(fileInputId);
    fileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
  
        const firstSheetName = workbook.SheetNames[0]; // Get the name of the first sheet
        const worksheet = workbook.Sheets[firstSheetName]; // Get the worksheet
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1}); // Convert the worksheet to JSON
        
        // Remove metadata rows, assuming the first 5 rows are metadata
        const cleanData = jsonData.slice(5); 
  
        callback(cleanData.length); // Pass the number of rows to the callback
      };
      reader.readAsArrayBuffer(file);
    });
  }
  
  // Make ParseForm globally available
  window.ParseForm = ParseForm;
  