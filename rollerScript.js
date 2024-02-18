let isInputInInches = false;

// UPDATE LABELS
function updateInputLabelsAndClearFields() {
    // TOGGLE UNITS
    document.getElementById('toggleUnits').textContent = isInputInInches ? "SWITCH TO MILLIMETERS" : "SWITCH TO INCHES";
    document.querySelector('label[for="widthInput"]').textContent = `Width (${isInputInInches ? "in" : "mm"}):`;
    document.querySelector('label[for="heightInput"]').textContent = `Height (${isInputInInches ? "in" : "mm"}):`;
    
    // CLEAR INPUT FIELDS
    document.getElementById('widthInput').value = '';
    document.getElementById('heightInput').value = '';
}

// CALCULATE PRICE
function calculatePrice() {
    const fabricCollection = document.getElementById('fabricCollection');
    const selectedOptGroup = fabricCollection.options[fabricCollection.selectedIndex].parentNode;
    
    
    const pricePerMeter = parseFloat(selectedOptGroup.getAttribute('data-price'));
    const maxWidth = parseInt(selectedOptGroup.getAttribute('data-max-width'));
    const maxHeight = parseInt(selectedOptGroup.getAttribute('data-max-height'));

    let widthInput = parseInt(document.getElementById('widthInput').value);
    let heightInput = parseInt(document.getElementById('heightInput').value);

    if (isInputInInches) {
        widthInput *= 25.4;
        heightInput *= 25.4;
    }

    // EXCEEDS MAX DIMENSIONS CHECK
    if (widthInput > maxWidth) {
        document.getElementById('priceOutput').textContent = "ERROR: WIDTH IS EXCEEDED";
        return;
    } else if (heightInput > maxHeight) {
        document.getElementById('priceOutput').textContent = "ERROR: HEIGHT IS EXCEEDED";
        return;
    }
    // INPUT NOT A NUMBER CHECK
    if (isNaN(widthInput) || isNaN(heightInput)) {
        document.getElementById('priceOutput').textContent = "ERROR: INPUT MUST BE A NUMBER";
        return;
    }
    // INPUT LESS THAN 0 CHECK
    if (widthInput <= 0 || heightInput <= 0) {
        document.getElementById('priceOutput').textContent = "ERROR: INPUT MUST BE GREATER THAN 0";
        return;
    }

    let price = 0;

    if (maxWidth == 2000){
        if (widthInput <= 650){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 3 + 50) * 2;
        } else if (widthInput > 650 && widthInput <= 800){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 2.5 + 50) * 2;
        } else if (widthInput > 800 && widthInput <= 1000){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 2 + 50) * 2;
        } else if (widthInput > 1000 && widthInput <= 1200){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 1.75 + 50) * 2;
        } else if (widthInput > 1200 && widthInput <= 1400){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 1.5 + 50) * 2;
        } else if (widthInput > 1400 && widthInput <= 1600){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 1.25 + 60) * 2;
        } else if (widthInput > 1600 && widthInput < 1800){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) + 60) * 2;
        } else if (widthInput >= 1800 && widthInput <= 2000){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) + 75) * 2;
        }
    } else if (maxWidth == 2500){
        if (widthInput <= 625){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 4 + 50) * 2;
        } else if (widthInput > 625 && widthInput <= 830){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 3 + 50) * 2;
        } else if (widthInput > 830 && widthInput <= 1000){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 2.5 + 50) * 2;
        } else if (widthInput > 1000 && widthInput <= 1100){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 2.25 + 50) * 2;
        } else if (widthInput > 1100 && widthInput <= 1425){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 1.75 + 60) * 2;
        } else if (widthInput > 1425 && widthInput <= 1600){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 1.5 + 60) * 2;
        } else if (widthInput > 1600 && widthInput <= 1750){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 1.25 + 60) * 2;
        } else if (widthInput > 1750 && widthInput <= 1950){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 1.25 + 75) * 2;
        } else if (widthInput > 1950 && widthInput <= 2050){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) / 1.15 + 75) * 2;
        } else if (widthInput > 2050 && widthInput <= 2500){
            price = ((widthInput * 0.037) + ((heightInput / 1000 + 0.1) * pricePerMeter) + 75) * 2;
        }
    }
    if (price > 0) {
        document.getElementById('priceOutput').textContent = price.toFixed(2);
    }

}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleUnits').addEventListener('click', function() {
        isInputInInches = !isInputInInches;
        updateInputLabelsAndClearFields();
    });

    document.querySelector('button[onclick="calculatePrice()"]').addEventListener('click', calculatePrice);
});
