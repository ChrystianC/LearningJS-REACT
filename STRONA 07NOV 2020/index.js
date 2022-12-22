const inputs = document.querySelectorAll(".input"),
	form = document.querySelector("form"),
	modal = document.getElementById("myModal"),
	closeModal = document.getElementsByClassName("close")[0],
	signUpBtn = document.getElementById("sign-up"),
	signInBtn = document.getElementById("sign-in"),
	submitBtn = document.getElementById("form-submit"),
	Data = { firstName: "", Surname: "" };

function patternValidation(value) {
	return /[a-zA-Z]/.test(value);
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
	inputs.forEach((item) => {
		const { name, value } = item;
		return Object.assign(Data, { [name]: value, [name]: value });
	});

	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value != "" && patternValidation(inputs[i].value)) {
			return console.log("Signed up Details[" + JSON.stringify(Data) + "]");
		} else {
			return (modal.style.display = "block");
		}
	}
});

signUpBtn.addEventListener("click", function () {
	submitBtn.innerText = "Sign Up";
});

signInBtn.addEventListener("click", function () {
	submitBtn.innerText = "Sign In";
});
closeModal.addEventListener("click", () => {
	modal.style.display = "none";
});
