function crear() {
    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF();
    
    doc.text("Hello world!", 10, 50);
    doc.save("a4.pdf");
}