const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    if (height === "" || height < 0 || weight < 0 || weight === "" || isNaN(height) || isNaN(weight)) {
        result.innerHTML = "please give a valid height and weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.5) {
            result.innerHTML += "<p>Underweight</p>";
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML += "<p>Normal weight</p>";
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML += "<p>Overweight</p>";
        }
        else {
            result.innerHTML += "<p>Obesity</p>";
        }

    }





})