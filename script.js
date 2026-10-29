
const form = document.getElementById("fuelForm");
const distanceInput = document.getElementById("distance");
const mileageInput = document.getElementById("mileage");
const priceInput = document.getElementById("petrolPrice");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const distance = Number(distanceInput.value);
    const mileage = Number(mileageInput.value);
    const price = Number(priceInput.value);

    if (
        !Number.isFinite(distance) ||
        !Number.isFinite(mileage) ||
        !Number.isFinite(price) ||
        distance <= 0 ||
        mileage <= 0 ||
        price <= 0
    ) {
        result.innerHTML = `
            <strong>⚠ Please enter valid values.</strong>
            <p>All three numbers must be greater than zero.</p>
        `;
        return;
    }

    const litresNeeded = distance / mileage;
    const totalCost = litresNeeded * price;

    result.innerHTML = `
        <strong>✓ Estimated trip cost</strong>
        <p>Distance: ${distance.toLocaleString("en-IN")} km</p>
        <p>Fuel needed: ${litresNeeded.toFixed(2)} litres</p>
        <p>Estimated cost: ₹${totalCost.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}</p>
    `;
});

form.addEventListener("reset", function () {
    result.innerHTML = `
        <strong>⛽ Your estimate will appear here.</strong>
        <p>Enter your trip details above.</p>
    `;
});
