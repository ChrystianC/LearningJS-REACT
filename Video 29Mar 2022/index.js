const Btn = document.querySelector(".smooth-button");
const video = document.querySelector(".background-video");
let clicked = false;
Btn.addEventListener("click", function () {
	const pause = document.querySelector("#second");
	const play = document.querySelector("#first");
	pause.classList.toggle("show");
	play.classList.toggle("show");
	if (!clicked) {
		video.pause();
		clicked = true;
	} else {
		video.play();
		clicked = false;
	}
});
video.addEventListener("timeupdate", function () {
	const tekst = document.querySelector(".txt");
	if (video.currentTime > 8.3) {
		tekst.textContent = "Even if you are not ready for the day, it cannot always be night";
	} else {
		tekst.textContent = "";
	}
});
