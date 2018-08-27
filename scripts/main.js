$(document).ready(() => {

	$('nav').on("click", "*", (e) => {
		e.preventDefault();
		var scrollTo = e.target.href;
		scrollTo = scrollTo.slice(scrollTo.length - e.target.innerHTML.length - 1, scrollTo.length);

		$(scrollTo).animatescroll({
			scrollSpeed: 1000
		});
	});

});