const toggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".amount");

toggle.addEventListener("change", () => {
    prices.forEach(price => {
        const monthly = price.dataset.month;
        const yearly = price.dataset.year;

        price.textContent = toggle.checked? `$${yearly}` : `$${monthly}`;
    });
});