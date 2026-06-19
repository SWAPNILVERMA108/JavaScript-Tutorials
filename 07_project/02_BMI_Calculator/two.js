console.log("JS Loaded");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (!height || height <= 0) {
        results.innerHTML = "Please enter a valid height";
        return;
    }

    if (!weight || weight <= 0) {
        results.innerHTML = "Please enter a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `Your BMI is ${bmi}`;
});