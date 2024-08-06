function openContactForm() {
    document.getElementById("contact-form-overlay").style.display = "flex";
}

function closeContactForm() {
    document.getElementById("contact-form-overlay").style.display = "none";
}

    function openLink(link) {
        window.location.href = link;
    }
    function openPDF(pdfPath) {
window.open(pdfPath, '_blank');
}

