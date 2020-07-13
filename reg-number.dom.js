const regNumberEntered = document.querySelector(".regNumberEntered");
const addRegNumberBtn = document.querySelector(".addRegNumber");


addRegNumberBtn.addEventListener("click", function() {
	alert(regNumberEntered.value);
});
