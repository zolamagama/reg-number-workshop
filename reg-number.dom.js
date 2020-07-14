const regNumberEntered = document.querySelector(".regNumberEntered");
const regNumber = document.querySelector(".regNumber");
const regNumbers = document.querySelector(".regNumbers");
const addRegNumberBtn = document.querySelector(".addRegNumber");
const message = document.querySelector(".message");
const currentTown = document.querySelector(".radioButton");

const regNumberEnter = [];

addRegNumberBtn.addEventListener("click", function(e) {
console.log(e.target.value)

const filteredList = [];

for (var i=0;i<regNumberEntered.length;i++) {

}
	if (regNumberEntered.value == "") {
		message.innerHTML = "Please enter a registration number";
		return;
	}
	const currentRegNumber = regNumberEntered.value.toUpperCase();

	if (currentRegNumber.startsWith("CA") ||
		currentRegNumber.startsWith("CJ") ||
		currentRegNumber.startsWith("CY")) {

		message.innerHTML = "";
	

	if (!regNumberEnter.includes(currentRegNumber)) {
		const regNumberElem = document.createElement("div");
		regNumberElem.classList.add("regNumber");
		regNumberElem.innerHTML = currentRegNumber;
		regNumbers.appendChild(regNumberElem);
		regNumberEnter.push(currentRegNumber)
	}

	else {
		message.innerHTML = "This registration number already exists.";
	} 
}
	else {
		message.innerHTML = "Invalid registration number entered.";
	}




});
