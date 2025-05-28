function generateQRCode() {
    const url = document.getElementById('url').value;
    const qrcodeDiv = document.getElementById('qrcode');

    // Clear any existing QR code
    qrcodeDiv.innerHTML = '';

    if (!url.trim()) {
        alert('Please enter a valid URL!');
        return;
    }

    QRCode.toCanvas(url, { width: 250 }, function (error, canvas) {
        if (error) {
            console.error('Error generating QR code:', error);
            alert('Failed to generate QR code. Please try again.');
            return;
        }
        qrcodeDiv.appendChild(canvas);
    });
}
