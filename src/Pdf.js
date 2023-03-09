import React from 'react';

class Pdf extends React.Component {
  handleClick = () => {
    // Open the print dialog
    window.print();

    // Wait for the print dialog to close
    setTimeout(() => {
      // Create a new window and get its document object
      const win = window.open();
      const doc = win.document;

      // Copy the contents of the current page to the new window
      doc.write(document.documentElement.innerHTML);
      doc.close();

      // Convert the printed page to a PDF
      win.print();

      // Close the new window
      win.close();
    }, 500);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Download PDF</button>
    );
  }
}

export default Pdf;