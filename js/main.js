console.log("hi from JS");


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

  


