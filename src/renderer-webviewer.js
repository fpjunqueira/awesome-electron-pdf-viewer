const { dialog } = require('electron').remote;
const path = require('path');

// Add an event listener to our button.
document.getElementById('myButton').addEventListener('click', () => {

  // When the button is clicked, open the native file picker to select a PDF.
  dialog.showOpenDialog({
    properties: ['openFile'], // set to use openFileDialog
    filters: [ { name: "PDFs", extensions: ['pdf'] } ] // limit the picker to just pdfs
  }, (filepaths) => {

    // Since we only allow one file, just use the first one
    const filePath = filepaths[0];

    const viewerEle = document.getElementById('viewer');
    viewerEle.innerHTML = ''; // destroy the old instance of PDF.js (if it exists)

    // create an instance of WV.
    new window.PDFTron.WebViewer({
      path: '../public/WebViewer/lib',
      l: 'demo:fjunqueira@atech.com.br:7599afbd015a211468e06fa55f5feac3e05ab9595309ba8836',
      initialDoc: filePath
    }, viewerEle)

  })
})