document.addEventListener("DOMContentLoaded", function () {
  // Select the form element
  const bmiForm = document.getElementById("bmiForm");

  // Add a submit event listener to the form
  bmiForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the height, weight, gender, and lifestyle values from the form
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Get lifestyle value or set to 'Not specified' if not selected
    const lifestyleCheckbox = document.querySelector(
      'input[name="lifestyle"]:checked'
    );
    const lifestyle = lifestyleCheckbox
      ? lifestyleCheckbox.value
      : "Not specified";

    // Calculate BMI
    const bmi = calculateBMI(weight, height);

    // Determine BMI status
    const status = getBMIStatus(bmi);

    // Display the result in the textarea
    displayResult(height, weight, gender, lifestyle, bmi, status);
  });

  // Function to calculate BMI
  function calculateBMI(weight, height) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    const bmi = weight / Math.pow(height / 100, 2);
    return bmi.toFixed(2); // Round to 2 decimal places
  }

  // Function to determine BMI status
  function getBMIStatus(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  // Function to display the result in the textarea
  function displayResult(height, weight, gender, lifestyle, bmi, status) {
    const additionalInfoTextarea = document.getElementById("additionalInfo");
    const resultMessage = `Your BMI is ${bmi}, indicating that you are ${status}.\n\nHeight: ${
      height / 100
    } m\nWeight: ${weight} kg\nGender: ${gender}\nLifestyle: ${lifestyle}\nBMI: ${bmi}\nStatus: ${status}`;

    additionalInfoTextarea.value = resultMessage;
  }
});


