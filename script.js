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

function playAudio_1() { 
	var y = document.getElementById("myAudio_1"); 
	y.play(); 
}

function playAudio_2() { 
	var y = document.getElementById("myAudio_2"); 
	y.play(); 
}

function playAudio_3() { 
	var y = document.getElementById("myAudio_3"); 
	y.play(); 
}

function playAudio_4() { 
	var y = document.getElementById("myAudio_4"); 
	y.play(); 
}

function playAudio_5() { 
	var y = document.getElementById("myAudio_5"); 
	y.play(); 
}

function playAudio_6() { 
	var y = document.getElementById("myAudio_6"); 
	y.play(); 
}


