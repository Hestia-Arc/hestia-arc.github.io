/*function validation() {

	var firstN = document.getElementById("fname");
	var lastN = document.getElementById("lname");
	if (firstN.value == "" || lastN.value == "") {
		alert("Names cannot be blank");
		return false; 
	}*/

	var request = new XMLHttpRequest();
	request.open("GET", https://microblog.azurewebsites.net/index.html, true);
	  request.send();

	const pNumber = document.getElementById("p-number");
	const eMail = document.getElementById("email");
	const pass = document.getElementById("pword");

    const phoneRegex = /^[0-9]{3}\-[0-9]{4}\-[0-9]{4}$/;
    const emailRegex = /^([\.\_\-a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,4})$/;
    const passRegex = /^[a-zA-Z0-9\.\,\-\_\?@\!\@\#\$\%\^\&\*\+]{5,10}$/;
	const form = document.getElementById("myform");


	form.addEventListener("submit", (event) => {

		

      if (phoneRegex.test(pNumber.value) == false) {

        event.preventDefault();
	}
	    
	  if (emailRegex.test(eMail.value) == false) {

		event.preventDefault();
	}
      if (passRegex.test(pass.value) == false) {

        event.preventDefault();
	}
	});
