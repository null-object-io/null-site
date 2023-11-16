console.log("hi from JS");

// load home page bg random colors
let body = document.querySelector(".random-color");
let colors = ["null-violet", "null-pink", "null-blue", "null-orange", "null-yellow"];
if (body != null) {
	//pick random color
	let randomIndex = Math.floor(Math.random() * colors.length);
	let randomElement = colors[randomIndex];
	console.log("home page", randomElement);
	body.classList.add(randomElement);
}

let scrollArrow = document.querySelector("#scroll-down-homepage");
let logoSection = document.querySelector("#logo-section");

if (scrollArrow != null) {
	scrollArrow.addEventListener('click', function(){
		logoSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
	});
}


// format images in posts
let imageBlock = document.querySelectorAll(".post-content .two-images");
for (var i = 0; i < imageBlock.length; i++) {
	const fig = imageBlock[i].getBoundingClientRect();
	let viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	console.log(viewPortWidth);
	let extraWidth = 400;
	if (viewPortWidth > 767) {
		imageBlock[i].style.width = fig.width+extraWidth+"px";
		let left = -Math.abs(extraWidth/2);
		imageBlock[i].style.left = left+"px";
	}
}




/*let images = document.querySelectorAll(".post-content table img");
for (var i = 0; i < images.length; i++) {
	images[i].classList.add("img-fluid");
}*/

/*imageBlock.parentNode.classList.add("image-block");
imageBlock.classList.add("test");*/


// contact form validation
let contactForm = document.querySelector("#contact-form");

if (contactForm != null) {
	contactForm.addEventListener('submit', function (event) {
    console.log("submit clicked");
    if (!contactForm.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    contactForm.classList.add('was-validated')
  }, false)
}


// create carousel index and caption
let carousel = document.querySelector("#carouselControls");
let carouselItems = document.querySelectorAll(".carousel-item");
let carouselUI = document.querySelector(".carousel-control-slide-no");
let carouselUIcaption = document.querySelector(".carousel-control-caption");


if (carousel != null) {
	carouselUI.innerHTML = "1/"+carouselItems.length;
	carouselUIcaption.innerHTML = carouselItems[0].dataset.caption;
	carousel.addEventListener('slid.bs.carousel', function () {
		let carouselCurrentItem = document.querySelector(".carousel-item.active");
		for (var i = 0; i < carouselItems.length; i++) {
			if (carouselItems[i] == carouselCurrentItem) {
				carouselUI.innerHTML = i+1+"/"+carouselItems.length;
				carouselUIcaption.innerHTML = carouselItems[i].dataset.caption;
				console.log(i, carouselItems[i].dataset.caption);
			}
		}
	});
}

  


