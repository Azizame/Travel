const owl = $('.owl-carousel');
owl.owlCarousel({
	center: true,
	loop: true,
	margin: 20,
	items: 1,
	responsive: {
		0: {

		},
		850: {
			items: 3,
		},
		
		1200:{
			margin: 30,
		}
	}
});
$(".slider__btn-prev").click(function() {
    owl.trigger('prev.owl.carousel');
});
$('.slider__btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})
const navToggle = document.querySelector(".nav__togle");
const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");
const goTrip = document.querySelector(".header__badge")

	logo.remove();

navToggle.onclick = function(){
	nav.classList.toggle("nav--mobile")
	logo.classList.remove("hide")
	
    menuIcon.classList.toggle('menu-icon-active');
}

