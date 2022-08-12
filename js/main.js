// Javascript


// Search bar functionality
const menuIcon = document.querySelector(".menu-icon");
const slideOutMenu = document.querySelector(".slide-out-menu");
const searchIcon = document.querySelector(".search-icon");
const searchBox = document.querySelector(".searchbox");

// slide diagonally in search
searchIcon.addEventListener("click", function(){
	if(searchBox.style.right == "0px"){
		searchBox.style.right = "-500px";
		searchBox.style.top = "24px";
		searchBox.style.pointerEvents = "none";
	} else {
		searchBox.style.right = "0px";
		searchBox.style.top = "72px";
		searchBox.style.pointerEvents = "auto";
	}
});
// slide down search. second type of option
// searchIcon.addEventListener("click", function(){
	// if(searchBox.style.top == "72px"){
		// searchBox.style.top = "24px";
		// searchBox.style.pointerEvents = "none";
	// } else {
		// searchBox.style.top = "72px";
		// searchBox.style.pointerEvents = "auto";
	// }
// });


// Mobile menu transform diagonally slide in
menuIcon.addEventListener("click", function(){
	if(slideOutMenu.style.opacity == "1"){
		slideOutMenu.style.opacity = "0";
		slideOutMenu.style.pointerEvents = "none";
		menuIcon.style.transform = "rotate(0deg)";
		slideOutMenu.style.top = "-500px";
		slideOutMenu.style.right =  "-786px";
	} else {
		slideOutMenu.style.opacity = "1";
		slideOutMenu.style.pointerEvents = "auto";
		menuIcon.style.transform = "rotate(90deg)";
		slideOutMenu.style.top = "0px";
		slideOutMenu.style.right =  "0px";
	}
})
// Mobile menu transform fade in. second type of option
// menuIcon.addEventListener("click", function(){
	// if(slideOutMenu.style.opacity == "1"){
		// slideOutMenu.style.opacity = "0";
		// slideOutMenu.style.pointerEvents = "none";
		// menuIcon.style.transform = "rotate(0deg)";
	// } else {
		// slideOutMenu.style.opacity = "1";
		// slideOutMenu.style.pointerEvents = "auto";
		// menuIcon.style.transform = "rotate(90deg)";
	// }
// })



// Reset menus on screen resize
window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    // var newHeight = window.innerHeight; 
	if(newWidth >= 768){
		searchBox.style.top = "24px";
		searchBox.style.right = "-500px";
		searchBox.style.pointerEvents = "none";
		slideOutMenu.style.opacity = "0";
		slideOutMenu.style.pointerEvents = "none";
		menuIcon.style.transform = "rotate(0deg)";
		slideOutMenu.style.top = "-500px";
		slideOutMenu.style.right =  "-786px";
	}
});

// Copyright Year
const copyrightYear = document.querySelector(".copyright-year");
let theDate = new Date().getFullYear();
copyrightYear.textContent = theDate;