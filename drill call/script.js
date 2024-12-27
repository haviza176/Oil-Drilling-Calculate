function calculateVolume() {
    const depth = document.getElementById('depth').value;
    const diameter = document.getElementById('diameter').value;

    if (!depth || !diameter || depth <= 0 || diameter <= 0) {
        alert('Please enter valid values for depth and diameter.');
        return;
    }

    // Convert diameter from inches to meters
    const diameterMeters = diameter * 0.0254;

    // Calculate volume of cylinder (πr²h)
    const radius = diameterMeters / 2;
    const volume = Math.PI * Math.pow(radius, 2) * depth;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `The estimated drilling volume is <strong>${volume.toFixed(2)} cubic meters</strong>.`;
}
