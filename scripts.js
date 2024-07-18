function calculateDieselVolume() {
    const dieselDensity = 0.832; // Density of diesel in kg/L
    const massTonnes = document.getElementById('dieselMassTonnes').value;
    if (massTonnes && !isNaN(massTonnes)) {
        const massKg = massTonnes * 1000; // Convert metric tonnes to kilograms
        const volumeLiters = massKg / dieselDensity; // Calculate volume in liters
        document.getElementById('dieselVolumeLiters').value = volumeLiters.toFixed(2);
    } else {
        alert('Please enter a valid mass in metric tonnes.');
    }
}

function clearDieselFields() {
    document.getElementById('dieselForm').reset();
    document.getElementById('dieselVolumeLiters').value = '';
}

function calculatePmsVolume() {
    const pmsDensity = 0.737; // Density of PMS in kg/L (typical value)
    const massTonnes = document.getElementById('pmsMassTonnes').value;
    if (massTonnes && !isNaN(massTonnes)) {
        const massKg = massTonnes * 1000; // Convert metric tonnes to kilograms
        const volumeLiters = massKg / pmsDensity; // Calculate volume in liters
        document.getElementById('pmsVolumeLiters').value = volumeLiters.toFixed(2);
    } else {
        alert('Please enter a valid mass in metric tonnes.');
    }
}

function clearPmsFields() {
    document.getElementById('pmsForm').reset();
    document.getElementById('pmsVolumeLiters').value = '';
}
