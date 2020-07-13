const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");

addRegNumberBtn.addEventListener("click", function() {

	if (regNumberEntered.value == "") {
		message.innerHTML = "Please enter a registration number";
		return;
	}

	regNumber.innerHTML = regNumberEntered.value;
});
