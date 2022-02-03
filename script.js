//scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");	
scrollUp.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});

//hamburger selections
const burger = document.querySelector("#menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
	ul.classList.toggle("show");
});

//close hamburger menu when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
	link.addEventListener("click", () => {
		ul.classList.remove("show");
	})
);
