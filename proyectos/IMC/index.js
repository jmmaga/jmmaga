const bodyMassIndex = (weight, height) => {
  let operation = weight / (height * height);
  let truncated = operation.toFixed(1);
  let bmi = parseFloat(truncated);
  if (bmi >= 18.5 && bmi <= 24.9) {
    return (`Tu índice de masa corporal es ${bmi}, estás sano.`);
  } else if (bmi <= 18.4) {
    return (`Tu índice de masa corporal es ${bmi}, estás bajo de peso.`);
  } else if (bmi > 24.9 && bmi < 30) {
    return (`Tu índice de masa corporal es ${bmi}, tienes sobrepeso.`);
  } else if (bmi >= 30) {
    return (`Tu índice de masa corporal es ${bmi}, tienes obesidad.`);
  }
}

function calculateBMI() {
  event.preventDefault();
  const weight = document.getElementById('peso').value;
  const height = document.getElementById('altura').value;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = bodyMassIndex(weight, height);
}
