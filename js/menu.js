function menuOn() {
	if (window.innerWidth < 800) {
		document.getElementById("sidenav").style.width = "100vw";
		document.querySelector(".header").style.marginRight = "100vw";
	}
	if (window.innerWidth >= 800) {
			document.getElementById("sidenav").style.width = "40vw";
			document.querySelector(".header").style.marginRight = "40vw";
		};
};

function menuOff() {
  document.getElementById("sidenav").style.width = "0";
  document.querySelector(".header").style.marginRight= "0";
  }