//create the conversion function
//Farhenheit to Celsius
let tempF = function(){

    inputTemp = document.getElementById('tempFarh').value;

    console.log(inputTemp);

    let finalTemp = Math.round((inputTemp - 32)/1.8);

    document.getElementById('tempFarh').value = "";

    //Alert
    alert (inputTemp + "Fahrenheit" + "is " + finalTemp + " in Celsius.");
}

// Celsius TO Farhenheit
let tempC = function(){

    inputTemp = document.getElementById('tempCel').value;

    console.log(inputTemp);

    let finalTemp = Math.round((inputTemp * 9/5) + 32);

    document.getElementById('tempCel').value = "";

    //Alert
    alert (inputTemp + "Celsius " + "is " + finalTemp + " in Fahrenheit.");



}

//run the function on click
document.getElementById('celToFarh').addEventListener('click', function(){tempF()});
document.getElementById('farhToCel').addEventListener('click', function(){tempC()});


//console.log(finalTemp);
