function displayFunction() {
	var x = document.getElementById("theme");
	if (x.style.opacity === "1") {
		x.style.opacity = "0";
		x.style.bottom = "70%";
	} else {
		x.style.opacity = "1";
		x.style.bottom = "60%";
	}

}

function themeFunction() {
	var element = document.getElementsByTagName("html")[0];
	element.classList.toggle("white-mode");
}

function playAudio() { 
	var y = document.getElementById("myAudio"); 
	y.play(); 
}

