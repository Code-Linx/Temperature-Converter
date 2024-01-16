function convertTemperature() {
  // Get user input for Kelvin temperature
  const kelvinInput = document.getElementById("kelvinInput").value;

  // Convert user input to a number
  const kelvin = parseFloat(kelvinInput);

  // Check if the input is a valid number
  if (isNaN(kelvin)) {
    document.getElementById("result").innerText =
      "Invalid input. Please enter a valid number for the Kelvin temperature.";
  } else {
    // Convert Kelvin to Celsius
    const celsius = kelvin - 273;

    // Convert Celsius to Fahrenheit using the formula (Celsius * 9/5) + 32
    let fahrenheit = celsius * (9 / 5) + 32;

    // Round down the Fahrenheit temperature using Math.floor
    fahrenheit = Math.floor(fahrenheit);

    // Display the result
    document.getElementById(
      "result"
    ).innerText = `The temperature is ${fahrenheit} degrees Fahrenheit.`;
  }
}
