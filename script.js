//create the conversion function
let tempF = function(){

    inputTemp = document.getElementById('temp').value;

    console.log(inputTemp);

    let finalTemp = Math.round((inputTemp - 32)/1.8);

    //Alert
    alert (inputTemp + "Fahrenheit" + "is " + finalTemp + " in Celsius.");
}

//run the function on click
document.getElementById('cToF').addEventListener('click', function(){tempF()});

//console.log(finalTemp);
