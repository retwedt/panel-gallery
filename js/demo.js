//main.js


//JSON to store bios
var bios = {
	1: {
		"img": "img/buttons/bell-peppers.jpg",
		"bio": "Bacon ipsum dolor amet frankfurter fatback pork loin, turkey flank shoulder meatloaf pork belly hamburger kielbasa tail alcatra strip steak pancetta. Beef ribs turkey short loin, jerky salami shank swine. Capicola turducken fatback, corned beef jowl bresaola pig. Shoulder pork filet mignon strip steak picanha bresaola, ribeye shank drumstick pancetta jowl biltong cupim bacon tenderloin. T-bone bacon salami alcatra ball tip brisket leberkas flank bresaola chicken tongue swine. Andouille prosciutto tenderloin, pork loin venison flank chicken turkey. Kielbasa meatball landjaeger, ground round sirloin shank shankle pastrami ham hock jowl t-bone picanha meatloaf.",
	},
	2: {
		"img": "img/buttons/carrots.jpg",
		"bio": "Picanha filet mignon prosciutto kevin. Spare ribs venison chuck andouille pig ham hock. Flank fatback jerky, turkey drumstick capicola sirloin prosciutto pork chop ham hock beef ribs venison tail. Pork hamburger tail kielbasa short ribs boudin chuck jowl tri-tip pastrami landjaeger chicken turducken strip steak bresaola.",
	},
	3: {
		"img": "img/buttons/pumpkins.jpg",
		"bio": "Porchetta strip steak pancetta drumstick corned beef chicken, tenderloin beef. Pastrami pork belly chicken, prosciutto alcatra capicola ham hock tongue ball tip meatball beef ground round. Landjaeger shoulder venison frankfurter short loin. Short loin hamburger meatloaf capicola alcatra. Ham hock venison jerky, turducken beef corned beef swine cow biltong cupim meatball short ribs kevin. Tenderloin doner venison pork picanha pork belly, alcatra ball tip turkey landjaeger sausage ground round swine pork loin. Meatball doner fatback, bacon kielbasa cow flank.",
	},
	4: {
		"img": "img/buttons/bread.jpg",
		"bio": "Drumstick tri-tip meatball porchetta biltong picanha. Doner pork loin ham hock, turkey fatback flank bacon hamburger strip steak prosciutto chuck bresaola. Bresaola brisket cupim, beef spare ribs pork belly turducken biltong drumstick shoulder hamburger capicola. Sirloin flank filet mignon ribeye pork loin turducken. Meatloaf beef ribs ham pancetta tongue ribeye pork belly picanha ham hock jowl frankfurter tri-tip chuck. Prosciutto jerky beef pork jowl tail spare ribs. Ham hock pork chop venison corned beef porchetta swine.",
	},
	5: {
		"img": "img/buttons/cookies.jpg",
		"bio": "Tail hamburger short loin tenderloin rump shank, landjaeger brisket kevin alcatra capicola turkey pancetta meatloaf. Sausage brisket jowl filet mignon venison meatball capicola. Tail chicken short loin ground round, shank capicola andouille frankfurter bacon biltong ham. Kielbasa tongue andouille hamburger, spare ribs tail ham hock fatback.",
	},
	6: {
		"img": "img/buttons/cupcakes.jpg",
		"bio": "T-bone pork loin pig frankfurter venison drumstick chicken tail ground round pastrami beef ribs biltong tenderloin porchetta. Pork belly picanha pancetta, leberkas beef biltong salami alcatra landjaeger pork chop kielbasa kevin andouille pork. Ham picanha shank, shankle short loin filet mignon pork loin pork rump alcatra. Fatback strip steak shoulder ham, swine pancetta landjaeger drumstick frankfurter. Strip steak kevin chuck ham ground round, frankfurter pancetta capicola meatloaf kielbasa spare ribs meatball ball tip turducken. Swine chicken ball tip tail kevin shoulder.",
	},
	7: {
		"img": "img/buttons/candy.jpg",
		"bio": "Salami strip steak ham sirloin, venison prosciutto filet mignon tongue shankle turducken leberkas. Jerky beef ribs porchetta, fatback bresaola short loin shoulder ribeye boudin strip steak. Swine bresaola cupim andouille sausage pork rump pork belly kielbasa pork loin bacon spare ribs picanha beef ribs. Boudin ham hock meatball, beef ribs salami beef capicola strip steak cow frankfurter chuck bacon sausage.",
	},
	8: {
		"img": "img/buttons/fries.jpg",
		"bio": "Bacon ipsum dolor amet flank corned beef turkey tail pork doner. Fatback spare ribs beef shankle porchetta short ribs. Swine pork loin capicola biltong t-bone, sausage doner shoulder drumstick corned beef. Prosciutto jerky meatloaf porchetta kielbasa ham cow tenderloin turducken pork loin boudin t-bone flank tri-tip.",
	},
	9: {
		"img": "img/buttons/pizza.jpg",
		"bio": "Swine fatback frankfurter, meatloaf prosciutto pastrami pork chop jerky. Corned beef tenderloin venison kielbasa. Pastrami jerky leberkas pork loin short loin sausage. Leberkas salami meatball andouille kevin pastrami venison kielbasa rump hamburger brisket landjaeger picanha jowl short ribs. Meatball ball tip jerky corned beef short loin, bresaola pastrami sausage strip steak pig tail capicola."
	}
}


// get elements from dom
var panels = document.querySelectorAll(".panel");
var galleries = document.querySelectorAll(".gallery");
var buttons = document.querySelectorAll(".button");
var close = document.querySelector(".close-panels");


// set up default gallery
for (var i=0; i<galleries.length; i++) {
	var btn = galleries[i].querySelectorAll(".button");
	var rnd = Math.floor(Math.random() * btn.length);
	var startNum = rnd + parseInt(btn[0].id);
	galleries[i].querySelector("h1").textContent = "Title #" + startNum;
	galleries[i].querySelector("p").textContent = bios[startNum]["bio"];
	btn[rnd].setAttribute("class", "button saturate");
}


// bind panel function
for (var i = 0; i < panels.length; i++) {
	panels[i].addEventListener("click", function() {
		for (var i=0; i<panels.length; i++) {
			panels[i].setAttribute("class", "panel closed");
			galleries[i].setAttribute("class", "gallery inactive");
		}
		this.setAttribute("class", "panel open");
		var thisGallery = this.querySelector(".gallery");
		thisGallery.setAttribute("class", "gallery active");
	});
}


// bind button function
for (var i = 0; i < buttons.length; i++) {
	// add pictures to buttons
	buttons[i].style.backgroundImage = "url(" + bios[(i+1)]["img"] + ")";

	// add events to buttons
	buttons[i].addEventListener("click", function() {
		console.log("button clicked! " + this.id);
		var gallery = document.querySelector(".active");
		// reset button styling
		for (var j = 0; j < gallery.querySelectorAll(".button").length; j++) {
			gallery.querySelectorAll(".button")[j].setAttribute("class", "button desaturate");
		}
		var galleryTitle = gallery.querySelector("h1");
		var galleryText = gallery.querySelector("p");
		galleryTitle.textContent = "Title #" + this.id;
		galleryText.textContent = bios[this.id]["bio"];
		buttons[this.id-1].setAttribute("class", "button saturate");
		// when a button is clicked on, scroll back to top of gallery
		// this will only come into effect on mobile layouts
		gallery.scrollTop = 0;
	});
}


// close panels function
close.onclick = function() {
	for (var i=0; i<panels.length; i++) {
		galleries[i].setAttribute("class", "gallery inactive");
		panels[i].setAttribute("class", "panel default");
	}
}


// bind swapLayout function to events
window.onload = swapLayout;
window.onresize = swapLayout;
window.onclick = swapLayout;

// function to rearrange gallery on mobile
function swapLayout() {
	// make sure there is an active gallery,
	// then get the dom elements
	if (document.querySelector(".active") != null) {
		var activeGallery = document.querySelector(".active");
		var firstMenu = activeGallery.querySelector(".gallery-menu");
		var mainContent = activeGallery.querySelector(".gallery-text");

		// check window width
		if (window.innerWidth <= 960) {
			// if window is a mobile width, rearrange the elements
		  activeGallery.replaceChild(firstMenu, mainContent);
		  activeGallery.insertBefore(mainContent, firstMenu); 
		} else {
			// if window is a desktop width, rearrange the elements
		  activeGallery.replaceChild(mainContent, firstMenu);
		  activeGallery.insertBefore(firstMenu, mainContent); 
		}
	}
}