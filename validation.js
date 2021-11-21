
	var http = new XMLHttpRequest();
	var url = "https://microblog.azurewebsites.net/api/v1/Auth/register/";
	http.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		console.log(http.responseText);
	}
	}    
	http.open("POST", url, true);
	http.send(null);
	   

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
