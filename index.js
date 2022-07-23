const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");


submitButton.addEventListener("click", function () {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});
rates.forEach((rate) => {
    rate.addEventListener("click", function () {
        rating.innerHTML = rate.innerHTML;
    });
});