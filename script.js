// Скрыть промо вначале страницы

var closeButton = document.querySelector("#close-button");
closeButton.onclick = function() {
	document.querySelector("body").removeChild(document.querySelector("#promo-bar"));
}

// Смена фото на главном слайдере

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

// Слайдер с логотипами

var sliders = document.querySelectorAll(".slide-switcher");

for(var i = 0; i < sliders.length; i++) {
	sliders[i].addEventListener('click', moveSlider)
}

function moveSlider(e) {
	var target = e.target;
	if(target.tagName != "BUTTON") {
		return false;
	}

	var list = target.parentNode.parentNode;
	list.querySelector(".active-button").classList.remove("active-button");
	target.classList.add("active-button");
	currentSlide = target.dataset.value;
	list.parentNode.querySelector(".logo-slider").style.transform = "translateX(-" + 0 + (1170 * target.dataset.value) +"px)";
}


var currentSlide = 0;

var sliderInterval = setInterval(function() {
	var current = document.querySelectorAll("[data-value='" + currentSlide + "']");
	for(var c = 0; c < current.length; c++) {
		current[c].click();
	}
	currentSlide++;
	if(currentSlide>2) currentSlide = 0;
}, 3000);

function addAnimationForMob() {
	var buttonsForSliders = document.querySelectorAll("[data-value]");

	if(document.documentElement.clientWidth<1180) {
		for(var d = 0; d < buttonsForSliders.length; d++) {
			buttonsForSliders[d].parentNode.removeChild(buttonsForSliders[d]);
		}
		var slidersForMobile = document.querySelectorAll(".logo-slider"); 
		for(var e = 0; e < slidersForMobile.length; e++) {
			slidersForMobile[e].classList.add("slider-for-mobile");
		}

		clearInterval(sliderInterval);
	}
}

addAnimationForMob();
window.addEventListener("resize", addAnimationForMob);

// адаптивный размер видео на всю ширину экрана

function resizeVideoContainer() {
	var videoCont = document.querySelector("#video-cont");
	var workoutGirl = document.querySelector("#workout-girl");
	var size = document.documentElement.clientWidth * 0.5675;
	if(workoutGirl) size = workoutGirl.clientHeight;
	videoCont.style.height = size + "px";
}



window.onload = setInterval(resizeVideoContainer, 1000);
resizeVideoContainer();

window.addEventListener("resize", resizeVideoContainer);

// запуск видео

var videoPlayButton = document.querySelector('#video-play-button');

videoPlayButton.onclick = function() {
	var poster = document.querySelector("#video-poster");
	poster.parentNode.removeChild(poster);
	resizeVideoContainer();

	var fullSizeVideo = document.querySelector("#direct-video");
	fullSizeVideo.setAttribute("src", "https://player.vimeo.com/video/194421519?api=1&loop=0&mute=0&background=0&autoplay=1");
} 

// открытие меню на телефонах

var hamButt = document.querySelector("#hamburger-button");

hamButt.onclick = function() {
	var hamMenu = document.querySelector(".wrap");
	hamMenu.classList.toggle("ham-menu");
	if(hamButt.innerHTML == "×") {
		hamButt.innerHTML = "&#9776;";
		return;
	}
	hamButt.innerHTML = "&#215;";

}
