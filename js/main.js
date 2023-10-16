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


// hide show nav bar
el_autohide = document.querySelector('.autohide');

if (el_autohide != null){
	var last_scroll_top = 0;
	window.addEventListener('scroll', function() {
	      let scroll_top = window.scrollY;
	     if(scroll_top < last_scroll_top) {
	          el_autohide.classList.remove('scrolled-down');
	          el_autohide.classList.add('scrolled-up');
	      }
	      else {
	          el_autohide.classList.remove('scrolled-up');
	          el_autohide.classList.add('scrolled-down');
	      }
	      last_scroll_top = scroll_top;
	}); 
}

// format images in posts
let imageTable = document.querySelectorAll(".post-content table");
for (var i = 0; i < imageTable.length; i++) {
	const tablePos = imageTable[i].getBoundingClientRect();
	console.log(tablePos.left); 
	imageTable[i].style.left = "0";
}

let viewPortWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
console.log(viewPortWidth);


let images = document.querySelectorAll(".post-content table img");
for (var i = 0; i < images.length; i++) {
	/*images[i].classList.add("img-fluid");*/
}

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

  


