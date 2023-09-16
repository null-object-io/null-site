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

  


