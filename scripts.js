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


function calculatePrice() {
    const liters = parseFloat(document.getElementById('liters').value);
    const pricePerLiter = parseFloat(document.getElementById('price-per-liter').value);
    
    if (isNaN(liters) || isNaN(pricePerLiter) || liters <= 0 || pricePerLiter <= 0) {
        alert('Please enter valid values for liters and price per liter.');
        return;
    }

    const totalPrice = liters * pricePerLiter;

    // Format the total price with commas
    const formattedPrice = `₵${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    
    document.getElementById('total-price').innerText = formattedPrice;
}

let selectedOption = 'trucks'; // Default selection

function selectOption(option) {
    selectedOption = option;
    document.querySelectorAll('.pill-button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(option).classList.add('active');
}

function calculateConversion() {
    const value = parseFloat(document.getElementById('value').value);
    
    if (isNaN(value) || value <= 0) {
        alert('Please enter a valid value.');
        return;
    }

    let result;

    if (selectedOption === 'trucks') {
        result = value * 54000; // Multiply by 54000 if Trucks is selected
    } else if (selectedOption === 'volume') {
        result = value / 54000; // Divide by 54000 if Volume is selected
    }

    // Format the result with commas
    const formattedResult = `₵${result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    
    document.getElementById('result-value').innerText = formattedResult;
}
