// Скрыть промо вначале страницы

var closeButton = document.querySelector("#close-button");
closeButton.onclick = function() {
	document.querySelector("body").removeChild(document.querySelector("#promo-bar"));
}

//Смена фото на главном слайдере

var prevButton = document.querySelector("#prev-button");
var nextButton = document.querySelector("#next-button");
var mainSlideImgs = document.querySelectorAll(".main-slide-photos");
var currentImg = 0;

prevButton.onclick = function() {
	mainSlideImgs[currentImg].classList.remove("visible");
	currentImg--;
	if(currentImg<0) {
		currentImg = mainSlideImgs.length - 1;
	}

	mainSlideImgs[currentImg].classList.add("visible");
}

nextButton.onclick = function() {
	mainSlideImgs[currentImg].classList.remove("visible");
	currentImg++;
	if(currentImg>=mainSlideImgs.length) {
		currentImg = 0;
	}

	mainSlideImgs[currentImg].classList.add("visible");
}