document.getElementById("submit-button").addEventListener("click", calculateTemp);

function calculateTemp() {
    const numberTemp = parseFloat(document.getElementById('temp').value);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fehToCel = (fehr) => {
        let celsius = (fehr - 32) * 5/9;
        return celsius;
    }
    

    let result;

    if (valueTemp === "cel") {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fehToCel(numberTemp);
        result = Math.round(result);  // Rounding here
        document.getElementById("resultContainer").innerHTML = `= ${result}°Celsius`;
    }
    
    
    
}


